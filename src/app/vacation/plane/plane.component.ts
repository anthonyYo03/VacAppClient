import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router,RouterLink } from '@angular/router';
import { EnvService } from '../../env.service';
@Component({
  selector: 'app-plane',
  imports: [HttpClientModule,NgFor,CommonModule],
  templateUrl: './plane.component.html',
  styleUrl: './plane.component.css'
})
export class PlaneComponent {
planeData:any=[];

constructor(private apiCallPlanes:HttpClient, private router: Router,private env:EnvService){}

ngOnInit(){
  this.getPlanes();
}

getPlanes(){

this.apiCallPlanes.get<any[]>(`${this.env.BACKENDURL}/vehicles/planes`).subscribe((res)=>
this.planeData=res
)

}
planeImage:any=[
{"id":1 ,"src":"https://cdn.pixabay.com/photo/2017/08/12/09/23/plane-2633883_1280.jpg", "alt":"Airline Delta"},
{"id":2 ,"src":"https://cdn.pixabay.com/photo/2019/09/05/15/25/airbus-4454338_1280.jpg", "alt":"United Airline"},
{"id":3 ,"src":"https://cdn.pixabay.com/photo/2017/05/05/02/49/aircraft-2285807_1280.jpg","alt":"Airline : Emirates"},
{"id":4 ,"src":"https://cdn.pixabay.com/photo/2018/06/16/16/12/qatar-airways-3478969_1280.jpg","alt":"Qatar Airways"},
{"id":5 ,"src":"https://cdn.pixabay.com/photo/2022/04/06/20/29/airplane-7116299_1280.jpg","alt":"Lufthansa"}


];
// airline/:flightNumber/:price/:details/:imgSrc/:imgAlt
passDetails(plane:any,index:any){
const airline=plane.airline;
const flightNumber=plane.flightNumber;
const price=plane.price;
const details=plane.details;
const imgSrc=encodeURIComponent(this.planeImage[index].src);
const imgAlt=encodeURIComponent(this.planeImage[index].alt);

this.router.navigate(['/vacation/planeDetails',airline,flightNumber,price,details,imgSrc,imgAlt])


}

}
