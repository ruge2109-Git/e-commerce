import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthJwtService } from 'src/app/services/auth-jwt.service';
import { RtaApi, RtaApiSencilla } from '../models/rta-api';
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

  async subirImagenBlog(archivo:File, idProducto:string|undefined){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);

    const formData = new FormData();
    formData.append('img',archivo,archivo.name);
    formData.append('idObjeto',idProducto!);

    return this.http.post<RtaApiSencilla>(`/carga-archivos/subirImgBlog`,formData,{headers:headers}).toPromise();
  }

  async crearBlog(blog:Blog){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.post<RtaApi<Blog>>(`/blog`,blog,{headers:headers}).toPromise();
  }

  async editarBlog(idBlog:number,blog:Blog){
    localStorage.clear();
    await this.authService.login();
    let headers: HttpHeaders = await new HttpHeaders().set('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.patch<RtaApi<Blog>>(`/blog/${idBlog}`,blog,{headers:headers}).toPromise();
  }
}
