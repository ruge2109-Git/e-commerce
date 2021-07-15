import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthJwtService } from './auth-jwt.service';
import { RtaApi } from '../models/rta-api';
import { Ciudad, Departamento } from '../models/Ciudad.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http: HttpClient, private authService: AuthJwtService) {
  }

  async cargarCiudadesPorDepartamento(idDepto: number) {
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.get<RtaApi<Ciudad[]>>(`/ciudad/depto/${idDepto}`, { headers: headers }).toPromise();
  }

  async cargarDepartamentos(){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.get<RtaApi<Departamento[]>>(`/departamento`, { headers: headers }).toPromise();
  }


  /**
   * Los métodos se encargan de obtener las ciudades y departamentos de un JSON de Github y cargarlos a la base de datos mediante un api rest
   */
  // cargarCiudadesJSONGITHUB() {
  //   const url = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json";
  //   this.http.get<departamentoTemporal[]>(url).subscribe((data) => {
  //     this.nuevasCiudadesYDepartamentosJSONGITHUB(data);
  //   });
  // }

  // async nuevasCiudadesYDepartamentosJSONGITHUB(data: departamentoTemporal[]) {
  //   localStorage.clear();
  //   await this.authService.login();
  //   const headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
  //   data.forEach(deptos => {
  //     // Primero ejecutar esta sentencia
  //     this.nuevoDepartamentoJSONGITHUB(deptos.id + 1, deptos.departamento, headers);

  //     //Despues ejecutar esta
  //     deptos.ciudades.forEach(ciudades => {
  //       this.nuevasCiudadesJSONGITHUB(deptos.id + 1, ciudades, headers);
  //     });
  //   });
  // }

  // nuevoDepartamentoJSONGITHUB(codDepartamento: number, nomDepartamento: string, headers: HttpHeaders) {

  //   const data = {
  //     "codDepartamento": codDepartamento,
  //     "nombre": nomDepartamento
  //   };

  //   this.http.post(`/departamento`, data, { headers: headers }).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //     }
  //   );
  // }

  // nuevasCiudadesJSONGITHUB(codDepartamento: number, nomCiudad: string, headers: HttpHeaders) {
  //   const data = {
  //     "codDepartamento": codDepartamento,
  //     "nomCiudad": nomCiudad
  //   };

  //   this.http.post(`/ciudad`, data, { headers: headers }).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //     }
  //   );
  // }

}
