import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RtaApi } from '../models/rta-api';
import { Categoria } from '../states/categorias/categoria.model';
import { AuthJwtService } from './auth-jwt.service';
import { Store } from '@ngxs/store';
import { AgregarCategorias } from '../states/categorias/categoria.actions';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http: HttpClient, private authService:AuthJwtService,private store:Store) { }

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
