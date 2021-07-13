import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RtaApi } from '../models/rta-api';
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

}
