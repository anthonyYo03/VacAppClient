import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceService } from '../../../service.service';
@Component({
  selector: 'app-boat-details',
  imports: [],
  templateUrl: './boat-details.component.html',
  styleUrl: './boat-details.component.css'
})
export class BoatDetailsComponent {

constructor(private route:ActivatedRoute,private location:Location,private svc:ServiceService){}

boatDetails:string | null=null;
boatName:string | null=null;
cabinType:string | null=null;
pricePerDay:string | null=null;
details:string | null=null;
imgSrc:string | null=null;
imgAlt:string | null=null;

ngOnInit(){
this.boatDetails=this.route.snapshot.paramMap.get('boatDetails');
this.boatName=this.route.snapshot.paramMap.get('boatName');
this.cabinType=this.route.snapshot.paramMap.get('cabinType');
this.pricePerDay=this.route.snapshot.paramMap.get('pricePerDay');
this.details=this.route.snapshot.paramMap.get('details');
this.imgSrc=decodeURIComponent(this.route.snapshot.paramMap.get('imgSrc')!);
this.imgAlt=decodeURIComponent(this.route.snapshot.paramMap.get('imgAlt')!);

}


goBack(){
  this.location.back()
}




}
