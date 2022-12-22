import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


import { AdminService } from './admin.service';

@Injectable()
export class IdentityGuard implements CanActivate{

    constructor(
        private _router: Router,
        private _adminService: AdminService

    ){}
    

    canActivate(){
        let identity = this._adminService.getIdentity();

        if(identity){
            return true;
        }else {
            this._router.navigate(['/login']);
            return false;

        }
    }
}