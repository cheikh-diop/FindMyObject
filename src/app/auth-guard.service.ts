import { Injectable } from '@angular/core';
import {Router,CanActivate  } from "@angular/router";
import { LoginComponent } from './login/login.component';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth : LoginComponent,private router:Router) { }
canActivate(){
  if (this.auth.loggedIn()){
    return true;
  }
  else {
    this.router.navigate(['/login']);
    return false ;
  }
}

}

