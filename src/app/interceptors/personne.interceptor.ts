import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {catchError} from 'rxjs/operators'
import {throwError} from "rxjs/internal/observable/throwError";
import {Injectable} from "@angular/core";

@Injectable()
export class PersonneInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/personnes')) {
      const request = req.clone({
        setHeaders: {
          'test': 'plop'
        }
      });
      return next.handle(request)
        .pipe(
          catchError((err: HttpErrorResponse) => {
              if (err.status === 500) {
                this.router.navigateByUrl('/')
              }
              else {
                return throwError(err);
              }
            }
          )
        );
    }
    return next.handle(req);
  }

}
