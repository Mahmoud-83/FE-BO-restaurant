import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurants } from '../restaurants';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  restaurantForm: Restaurants ={
    id: 0,
    nom: '',
    address: '',
    phone: '',
    photo: ''
  }

  constructor(private restaurantService: RestaurantsService,
    private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    this.restaurantService.create(this.restaurantForm).subscribe({
      next:(data:any)=>{
        this.router.navigate(["/restaurants/home"])
      },
      error:(err: any)=>{
        console.log(err);
      }
    })
  }

}
