import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { RoleAclService } from './role-acl.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate {
  constructor(private roleAclService: RoleAclService, private router : Router){
  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const resource =  route.url[0].path;
    const action = 'main-page';
    console.log('resource', resource)
    const permission =this.roleAclService.isRouteAllowed(resource, action)
    console.log('permission granted'+permission)
    if (permission) {
      return true;
    } else {
      this.router.navigate(['/'])
    }
  }
}
