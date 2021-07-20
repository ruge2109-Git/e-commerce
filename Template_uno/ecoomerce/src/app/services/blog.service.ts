import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthJwtService } from 'src/app/services/auth-jwt.service';
import { RtaApi } from '../models/rta-api';
import { Blog } from '../states/blog/Blog.model';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private authService:AuthJwtService) { }

  async obtenerTodosLosBlogs(){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.get<RtaApi<Blog[]>>(`/blog`, { headers: headers }).toPromise();
  }

  async obtenerBlog(id:string){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.get<RtaApi<Blog>>(`/blog/${id}`, { headers: headers }).toPromise();
  }
}
