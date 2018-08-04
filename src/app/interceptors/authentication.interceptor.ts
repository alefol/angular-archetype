import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaderResponse, HttpSentEvent, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(localStorage.getItem('jwtToken')){
            const request = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                }
            });
            console.log(request.headers.get("Authorization"));
            return next.handle(request);
        }
        return next.handle(req);
    }
}