import { Routes } from '@angular/router';
import { PlaneComponent } from './plane/plane.component';
import { CarComponent } from './car/car.component';
import { BoatComponent } from './boat/boat.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { PlaneDetailsComponent } from './plane/plane-details/plane-details.component';
import { BoatDetailsComponent } from './boat/boat-details/boat-details.component';





export const routes: Routes = [

{path:'plane',component:PlaneComponent},
{path:'car',component:CarComponent},
{path:'boat',component:BoatComponent},
{ path: 'carDetails/:brand/:model/:pricePerDay/:details/:imgSrc/:imgAlt', component: CarDetailsComponent },
{ path: 'planeDetails/:airline/:flightNumber/:price/:details/:imgSrc/:imgAlt', component: PlaneDetailsComponent },
{path:'boatDetails/:boatName/:cabinType/:pricePerDay/:details/:imgSrc/:imgAlt',component:BoatDetailsComponent}

];
