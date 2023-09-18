import { UserService } from 'src/app/service/user.service';
import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from "@angular/router";

@Injectable({
    providedIn:'root'
})
class UserPermission
{
    constructor(
        private router:Router,
        private userService:UserService) { }
    
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean
    {
        if(!this.userService.checkUserLoginState())
        {
            this.router.navigate([""]);
            return false;
        }
        return true;
    }
}

export const USER_GUARD: CanActivateFn = (next:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean => {
    return inject(UserPermission).canActivate(next,state);
}