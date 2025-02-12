import { HttpHandler, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { catchError, throwError } from "rxjs";

export const authTokenInterceptor:HttpInterceptorFn = (req, next) => {
    
    const authService = inject(AuthService)
    const token = authService.token 


    if(!token) return next(req)

    req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    })

    return next(req)
        .pipe(
            catchError(error => {
                if(error.status === 403){
                    return refreshTokenInterceptor(authService, req, next)
                }
                return throwError(error)
            })
        )

}

const refreshTokenInterceptor:HttpInterceptorFn = (    
    authService: AuthService,
    req: HttpRequest<any>, 
    next:HttpHandlerFn) => {
} => {
    return authService.refreshAuthToken()
        .pipe(
            
        )
}