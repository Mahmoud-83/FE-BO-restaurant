import { Component, OnInit } from '@angular/core';
import { Restaurants } from '../restaurants';
import { RestaurantsService } from '../restaurants.service';
//declare var window:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allRestaurant: Restaurants[] = [];
  //deleteModel:any;
  //idTodelete:number=0;

  constructor(private restaurantService: RestaurantsService) { }

  ngOnInit(): void {
   // this.deleteModel = new window.bootstrap.Modal(
    //  document.getElementById('deleteModel')
    //);
    this.get();
  }

  get(){
    this.restaurantService.get().subscribe((data) =>{
      this.allRestaurant = data;
    });
  }

  /*openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModel.show();
  }

  delete(){
    this.restaurantService.delete(this.idTodelete).subscribe({
      next: (data) =>{
        this.allRestaurant = this.allRestaurant.filter(_ => _.id != this.idTodelete)
        this.deleteModel.hide();

      },
    });
  }*/

}
