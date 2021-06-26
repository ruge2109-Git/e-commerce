import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RtaApi } from '../models/rta-api';

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';

  constructor(private http: HttpClient) { }

  async login() {
    let payload = { username: "jonathan", password: "clave123" };
    return await this.http.post<RtaApi<Object>>(`/autenticacion`, payload).toPromise().then(
      (data) => {
        if (data.flag) this.saveTokens(data.msg)
      }
    );
  }

  isAuthenticated(): boolean {
    return Boolean(this.getToken());
  }

  getToken(): string | null {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private saveTokens(tokenJwt: string): void {
    localStorage.setItem(this.JWT_TOKEN, tokenJwt);
  }

  removeTokens(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  logout(): void {
    this.removeTokens();
  }

}
