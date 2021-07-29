import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RtaApi, RtaApiSencilla } from '../models/rta-api';
import { AgregarProductos } from '../states/producto/Producto.actions';
import { Producto, Productos } from '../states/producto/Producto.model';
import { AuthJwtService } from './auth-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient, private authService: AuthJwtService, private store: Store<Productos>) { }

  async obtenerTodas() {
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    await this.http.get<RtaApi<Producto[]>>('/producto', { headers: headers }).toPromise().then(
      (data) => {
        if (data.flag) {
          this.store.dispatch(new AgregarProductos(data.data));
        }
      }
    );
  }

  async obtenerMasVendidos(){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return await this.http.get<RtaApi<Producto[]>>('/producto', { headers: headers }).toPromise();
  }

  async obtenerTodosLosProductos(){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return await this.http.get<RtaApi<Producto[]>>('/producto', { headers: headers }).toPromise();
  }

  async obtenerProducto(id: string | null) {
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.get<RtaApi<Producto>>(`/producto/${id}`, { headers: headers }).toPromise();
  }

  async subirImagenProducto(archivo:File, idProducto:string|undefined){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);

    const formData = new FormData();
    formData.append('imgProd',archivo,archivo.name);
    formData.append('idProducto',idProducto!);

    return this.http.post<RtaApiSencilla>(`/carga-archivos/subirImgProducto?idProducto=${idProducto}`,formData,{headers:headers}).toPromise();
  }

  async editarProducto(idProducto:number, producto:Producto){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.patch<RtaApi<Producto>>(`/producto/${idProducto}`,producto,{headers:headers}).toPromise();
  }

  async guardarNuevoProducto(producto:Producto){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<RtaApi<Producto>>(`/producto`,producto,{headers:headers}).toPromise();
  }
}
