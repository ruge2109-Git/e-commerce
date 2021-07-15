import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/Cliente.model';
import { RtaApi } from '../models/rta-api';
import { AuthJwtService } from './auth-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient,private authService:AuthJwtService) { }


  async crearCliente(clienteBody:Cliente){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<RtaApi<Cliente>>(`/cliente`,clienteBody,{headers:headers}).toPromise();
  }
}
