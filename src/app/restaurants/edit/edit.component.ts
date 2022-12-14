import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurants } from '../restaurants';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  restaurantForm: Restaurants ={
    id: 0,
    nom: '',
    address: '',
    phone: '',
    photo: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param)=>{
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number){
    this.restaurantService.getById(id).subscribe((data)=>{
      this.restaurantForm = data;
    });
  }

  update(){
    this.restaurantService.update(this.restaurantForm)
    .subscribe({
      next:(data) =>{
        this.router.navigate(["/restaurants/home"]);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
