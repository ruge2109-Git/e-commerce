import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthJwtService } from './auth-jwt.service';

interface departamentoTemporal {
  id: number;
  departamento: string;
  ciudades: string[];
}

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private http: HttpClient, private authService: AuthJwtService) {
  }


  /**
   * Los métodos se encargan de obtener las ciudades y departamentos de un JSON de Github y cargarlos a la base de datos mediante un api rest
   */
  cargarCiudadesJSONGITHUB() {
    const url = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json";
    this.http.get<departamentoTemporal[]>(url).subscribe((data) => {
      this.nuevasCiudadesYDepartamentosJSONGITHUB(data);
    },
      (e) => {
      },
      () => {
        console.log("Completado");
      });
  }

  async nuevasCiudadesYDepartamentosJSONGITHUB(data: departamentoTemporal[]) {
    localStorage.clear();
    await this.authService.login();
    const headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    data.forEach(deptos => {
      // Primero ejecutar esta sentencia
      this.nuevoDepartamentoJSONGITHUB(deptos.id + 1, deptos.departamento, headers);

      //Despues ejecutar esta
      deptos.ciudades.forEach(ciudades => {
        this.nuevasCiudadesJSONGITHUB(deptos.id + 1, ciudades, headers);
      });
    });
  }

  nuevoDepartamentoJSONGITHUB(codDepartamento: number, nomDepartamento: string, headers: HttpHeaders) {

    const data = {
      "codDepartamento": codDepartamento,
      "nombre": nomDepartamento
    };

    this.http.post(`/departamento`, data, { headers: headers }).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  nuevasCiudadesJSONGITHUB(codDepartamento: number, nomCiudad: string, headers: HttpHeaders) {
    const data = {
      "codDepartamento": codDepartamento,
      "nomCiudad": nomCiudad
    };

    this.http.post(`/ciudad`, data, { headers: headers }).subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

}
