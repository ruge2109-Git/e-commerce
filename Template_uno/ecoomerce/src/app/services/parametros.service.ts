import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parametro } from '../models/admin/Parametro.model';
import { RtaApi } from '../models/rta-api';
import { AuthJwtService } from './auth-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  constructor(private http:HttpClient,private authService:AuthJwtService) { }

  async obtenerTodos(){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.get<RtaApi<Parametro[]>>(`/parametro`,{headers:headers}).toPromise();
  }

  async editarParametro(idParametro:number, parametro:Parametro){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.patch<RtaApi<Parametro>>(`/parametro/${idParametro}`,parametro,{headers:headers}).toPromise();
  }

  async guardarNuevoParametro(parametro:Parametro){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<RtaApi<Parametro>>(`/parametro`,parametro,{headers:headers}).toPromise();
  }
}
