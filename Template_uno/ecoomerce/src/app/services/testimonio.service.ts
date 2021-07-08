import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RtaApi } from '../models/rta-api';
import { Testimonio } from '../states/testimonio/Testimonio.model';
import { AuthJwtService } from './auth-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class TestimonioService {

  constructor(private http: HttpClient, private authService: AuthJwtService) { }

  async obtenerTestimonios(){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.get<RtaApi<Testimonio[]>>(`/testimonio/`, { headers: headers }).toPromise();
  }

  async obtenerTestimonioPorProducto(id: string | null) {
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.get<RtaApi<Testimonio[]>>(`/testimonio/producto/${id}`, { headers: headers }).toPromise();
  }

  async enviarTestimonio(testimonio:Testimonio){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<RtaApi<Testimonio[]>>(`/testimonio`, testimonio,{ headers: headers }).toPromise();
  }
}
