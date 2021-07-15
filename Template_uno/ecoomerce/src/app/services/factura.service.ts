import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleFactura, Factura } from '../models/Factura.model';
import { RtaApi } from '../models/rta-api';
import { AuthJwtService } from './auth-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http:HttpClient, private authService:AuthJwtService) { }

  async crearFactura(codCliente:number,observaciones:string,precioTotal:number){
    const data = {
      codCliente,
      observaciones,
      precioTotal
    };
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<RtaApi<Factura>>(`/factura`,data, { headers: headers }).toPromise();
  }

  async crearDetalleFactura(codFactura:number,codProducto:number,cantidad:number){
    const data = {
      codFactura,
      codProducto,
      cantidad
    };
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<RtaApi<DetalleFactura>>(`/detalle-factura`,data, { headers: headers }).toPromise();

  }

}
