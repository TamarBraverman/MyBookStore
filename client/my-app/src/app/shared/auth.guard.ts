import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardlogin implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //not logged in so return false
        if (!localStorage.getItem('user')) {
 
            return true;
        }
        //logged in so redirect to login and register page with the return url
        this.router.navigate(["/account"]);
        return false;
    }
}
@Injectable({ providedIn: 'root' })
export class AuthGuardCart implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('user')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to register page with the return url
        this.router.navigate(["/account/register"]);
        return false;
    }
}