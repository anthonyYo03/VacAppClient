import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-plane-details',
  imports: [],
  templateUrl: './plane-details.component.html',
  styleUrl: './plane-details.component.css'
})
export class PlaneDetailsComponent {

constructor(private router:ActivatedRoute,private location:Location,private svc:ServiceService){}

airline:string | null=null;
flightNumber:string |null=null
price:string |null=null
details:string |null=null
imgSrc:string |null=null
imgAlt:string |null=null

ngOnInit(){

this.airline=this.router.snapshot.paramMap.get('airline');
this.flightNumber=this.router.snapshot.paramMap.get('flightNumber');
this.price=this.router.snapshot.paramMap.get('price');
this.details=this.router.snapshot.paramMap.get('details');
this.imgSrc=decodeURIComponent(this.router.snapshot.paramMap.get('imgSrc')!);
this.imgAlt=decodeURIComponent(this.router.snapshot.paramMap.get('imgAlt')!);

}

goBack(){
  this.location.back();
}

}
