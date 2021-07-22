import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthJwtService } from './auth-jwt.service';
import { Contacto } from '../models/Contacto.model';
import { RtaApi } from '../models/rta-api';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http:HttpClient,private authService:AuthJwtService) { }

  async enviarMensaje(contacto:Contacto){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<RtaApi<Contacto>>(`/contacto`,contacto,{headers:headers}).toPromise();
  }
}
