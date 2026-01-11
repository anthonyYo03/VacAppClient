import { Component } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvService } from '../../env.service';
@Component({
  selector: 'app-boat',
  imports: [HttpClientModule ,NgFor,CommonModule],
  templateUrl: './boat.component.html',
  styleUrl: './boat.component.css'
})
export class BoatComponent {

boatData:any=[];

constructor(private apiCallBoats:HttpClient,private route:Router,private env:EnvService){}

ngOnInit(){
  this.getBoats();
}

getBoats(){

this.apiCallBoats.get<any[]>(`${this.env.BACKENDURL}/vehicles/boats`).subscribe((res)=>
this.boatData=res
)

}

boatImage:any=[
{"id":1 ,"src":"https://media.inventoryiq.io/prod/boats/6616e333aa71f90c6e063235/cmaag3stguoh8xwdkfsq_cropped.png", "alt":"Sea Breeze"},
{"id":2 ,"src":"assets/OceanExplorer.jpg", "alt":"Ocean Explorer"},
{"id":3 ,"src":"https://www.capriluxuryboats.com/images/banner-16142.jpg","alt":"Wave Rider"},
{"id":4 ,"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGCOttQ23m4CUQM7R4RtIbPWwPDHkJ6QFhQ&s","alt":"Sun Chaser"},
{"id":5 ,"src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTJX2xOVsdPSrFOOcihNg79G9QL3TaC9xPw&s","alt":"Coral Queen"}


];
passDetails(boats:any,index:any){

const boatName=boats.boatName;
const cabinType=boats.cabinType;

const pricePerDay=boats.pricePerDay;

const details=boats.details;

const imgSrc=encodeURIComponent(this.boatImage[index].src);
const imgAlt=encodeURIComponent(this.boatImage[index].alt);


this.route.navigate(['/vacation/boatDetails',boatName,cabinType,pricePerDay,details,imgSrc,imgAlt]);




}





}
