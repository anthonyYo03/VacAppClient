import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-car-details',
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent {
  


  // Add properties to store the data
  brand: string | null = null;
  model: string | null = null;
  pricePerDay: string | null = null;
  imgSrc: string | null = null;
imgAlt: string | null = null;
details:string | null= null;

  
  
  constructor(private route: ActivatedRoute,private location:Location,private svc:ServiceService) {}
  

  ngOnInit() {
  this.brand = this.route.snapshot.paramMap.get('brand');
  this.model = this.route.snapshot.paramMap.get('model');
  this.pricePerDay = this.route.snapshot.paramMap.get('pricePerDay');
  this.details=this.route.snapshot.paramMap.get('details');
  this.imgSrc = decodeURIComponent(this.route.snapshot.paramMap.get('imgSrc')!);
  this.imgAlt = decodeURIComponent(this.route.snapshot.paramMap.get('imgAlt')!);
}

goBack(){
  this.location.back();
}
}