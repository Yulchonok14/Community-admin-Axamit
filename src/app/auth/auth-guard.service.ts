import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { of } from 'rxjs';;
//import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService:AuthService, private router: Router) {
    }

    canActivate(activatedRouteSnapshot:ActivatedRouteSnapshot, routerStateSnapshot:RouterStateSnapshot): Observable<boolean> {
        /*if(!this.authService.isAuthenticated()) {
            this.router.navigate(['./']);
        }
        return new Observable(observer => {
            console.log('firebase.auth().currentUser; ', firebase.auth().currentUser);
            if (firebase.auth().currentUser) {
                observer.next(true);
            } else {
                firebase.auth().onAuthStateChanged(function (user) {
                    console.log('changed!', firebase.auth().currentUser);
                    if (user) {
                        observer.next(true);
                    } else {
                        //this.router.navigate(['./']);
                        observer.next(false);
                    }
                });
            }
        });*/
        //return this.authService.isAuthenticated();

        /*return this.auth
            .map((authState) => !!authState)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/signin']);
                }
            });*/

        return of(true);
    }
}
