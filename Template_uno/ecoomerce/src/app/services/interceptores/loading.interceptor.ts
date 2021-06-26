import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    private countRequest = 0;

    constructor(private spinner: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!this.countRequest) {
            this.spinner.show();
        }
        this.countRequest++;

        return next.handle(req).pipe(
            finalize(() => {
                this.countRequest--;
                if (!this.countRequest) {
                   this.spinner.hide();
                }
            })
        )
    }
}
