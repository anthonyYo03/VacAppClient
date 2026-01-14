import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailFormComponent } from './email-form/email-form.component';
import { NavbarComponent } from './navbar/navbar.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmailFormComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  title = 'Vacation App';

}
