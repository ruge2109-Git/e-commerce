import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RtaApi } from '../models/rta-api';

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {



  constructor(private http: HttpClient) { }

  async login() {
    let payload = { username: "jonathan", password: "clave123" };
    return await this.http.post<RtaApi<Object>>(`${environment.URL_API}/autenticacion`, payload).toPromise().then(
      (data) => {
        if (data.flag) localStorage.setItem("token", data.msg);
      }
    );
  }

}
