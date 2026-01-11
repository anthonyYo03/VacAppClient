import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, Pipe } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EnvService } from '../../env.service';
@Component({
  selector: 'app-car',
  imports: [NgFor,HttpClientModule,CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

carData:any=[];

constructor(private apiCallCars:HttpClient,private router: Router,private env:EnvService){}

ngOnInit(){
  this.getCars();
  
}

getCars(){

this.apiCallCars.get<any[]>(`${this.env.BACKENDURL}/vehicles/cars`).subscribe((res)=>
this.carData=res

)}

passDetails(car: any, index: number) {
  const brand = car.brand;
  const model = car.model;
  const pricePerDay = car.pricePerDay;
  const carDetails=car.details
  const imgSrc = encodeURIComponent(this.carImage[index].src);
  const imgAlt = encodeURIComponent(this.carImage[index].alt);

  this.router.navigate([
    '/vacation/carDetails',
    brand,
    model,
    pricePerDay,
    carDetails,
    imgSrc,
    imgAlt,
  ]);
}


carImage:any=[
{"id":1 ,"src":"https://cdn.pixabay.com/photo/2022/03/07/21/30/car-7054593_1280.jpg", "alt":"Chevy Camaro"},
{"id":2 ,"src":"https://cdn.pixabay.com/photo/2018/11/17/18/58/shelby-3821716_1280.jpg", "alt":"Ford Mustang"},
{"id":3 ,"src":"https://cdn.pixabay.com/photo/2022/02/20/04/42/jeep-wrangler-7023738_1280.jpg","alt":"Jeep Wrangler"},
{"id":4 ,"src":"https://cdn.pixabay.com/photo/2020/06/07/20/49/toyota-rav-4-5272096_1280.jpg","alt":"Toyota Rav4"},
{"id":5 ,"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogMQ0qPHCUjgh9XjzTZmHsjM6sMvX36kbuw&s","alt":"Honda Cr v"}


];





}
