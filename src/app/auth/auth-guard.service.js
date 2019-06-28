var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
;
//import { AngularFireAuth } from 'angularfire2/auth';
require('rxjs/add/operator/map');
var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (activatedRouteSnapshot, routerStateSnapshot) {
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
        return rxjs_1.of(true);
    };
    AuthGuardService = __decorate([
        core_1.Injectable()
    ], AuthGuardService);
    return AuthGuardService;
})();
exports.AuthGuardService = AuthGuardService;
//# sourceMappingURL=auth-guard.service.js.map