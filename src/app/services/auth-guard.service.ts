import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthenticationService,
    private router: Router) { 
      
    }

  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
  
}
