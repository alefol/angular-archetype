import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaderResponse, HttpSentEvent, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({
            setHeaders: {
              'Authorization': `Basic amFuZS5kb2VAbWFpbC5mcjoxMjM=`
            }
        });
        console.log(request.headers.get("test"));
        return next.handle(request);
    }
}