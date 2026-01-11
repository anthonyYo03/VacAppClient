import { Component } from '@angular/core';
import { HttpClient,HttpClientModule,HttpHeaders  } from '@angular/common/http';
import {  FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { EnvService } from '../env.service';

@Component({
  selector: 'app-email-form',
  imports: [HttpClientModule,FormsModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent {



constructor (private apiCaller:HttpClient,private toastr: ToastrService,private location: Location,private env:EnvService){}
firstName='';
lastName='';
gender='';
email='';
details='';



  postEmail(){
    const headers=new HttpHeaders({
  "Content-Type": "application/json",
});
const options={headers:headers}
  this.apiCaller.post(`${this.env.BACKENDURL}/form`,{ firstName:this.firstName,lastName:this.lastName,gender:this.gender,email:this.email,details:this.details},options).subscribe({
    next: (response: any) => {
      
      console.log(response); 
     this.toastr.success(response.message || 'Email sent successfully!') ;
      
      
      // Clear form after success
      this.firstName='';
      this.lastName='';
      this.gender='';
      this.email='';
      this.details='';
    },
    error: (err) => {
    this.toastr.error(err.error?.message || 'Something went wrong!');
  }
  })
}

goBack() {
  this.location.back();
}
}


