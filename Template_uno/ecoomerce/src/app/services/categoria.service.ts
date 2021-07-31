import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RtaApi, RtaApiSencilla } from '../models/rta-api';
import { Categoria, Categorias } from '../states/categorias/categoria.model';
import { AuthJwtService } from './auth-jwt.service';
import { Store } from '@ngrx/store';
import { AgregarCategorias } from '../states/categorias/categoria.actions';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http: HttpClient, private authService:AuthJwtService,private store:Store<Categorias>) { }

  async obtenerTodas() {
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    await this.http.get<RtaApi<Categoria[]>>('/categorias', { headers: headers }).toPromise().then(
      (data) => {
        if (data.flag) {
          this.store.dispatch(new AgregarCategorias(data.data));
        }
      }
    );
  }

  async obtenerTodasLasCategorias(){
     localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return await this.http.get<RtaApi<Categoria[]>>('/categorias', { headers: headers }).toPromise();
  }

  async crearCategoria(categoria:Categoria){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<RtaApi<Categoria>>(`/categorias`,categoria,{headers:headers}).toPromise();
  }

  async editarCategoria(idCategoria:number,categoria:Categoria){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.patch<RtaApi<Categoria>>(`/categorias/${idCategoria}`,categoria,{headers:headers}).toPromise();
  }

  async subirImagenProducto(archivo:File, idProducto:string|undefined){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);

    const formData = new FormData();
    formData.append('img',archivo,archivo.name);
    formData.append('idObjeto',idProducto!);

    return this.http.post<RtaApiSencilla>(`/carga-archivos/subirImgCategoria`,formData,{headers:headers}).toPromise();
  }

}
