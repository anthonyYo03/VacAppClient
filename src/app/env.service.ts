import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EnvService {

BACKENDURL=environment.BACKEND_URL

  constructor() { }
}
