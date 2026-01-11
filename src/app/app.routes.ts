import { Routes } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { VacationComponent } from './vacation/vacation.component';


export const routes: Routes = [
{path:'',redirectTo:'/vacation',pathMatch:'full'},
{path:'home',component:VacationComponent},
{path:'emails',component:EmailFormComponent},

{
    path:'vacation',
    loadComponent: () =>  import('./vacation/vacation.component').then(m => m.VacationComponent),
    loadChildren: () =>
      import('./vacation/vacation.route').then(m => m.routes)  
  },

 {path:'**',component:NotFoundComponent},


];
