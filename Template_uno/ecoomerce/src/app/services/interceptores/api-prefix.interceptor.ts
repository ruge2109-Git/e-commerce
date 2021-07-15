import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiUrl = environment.URL_API;
        if (req.url.includes('githubusercontent')) {
          req = req.clone({ url: req.url });
          return next.handle(req);
        }
        req = req.clone({ url: apiUrl + req.url });
        return next.handle(req);
    }
}
