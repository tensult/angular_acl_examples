import { Injectable } from '@angular/core';
import { AccessControl, Permission } from 'role-acl';
import { Auth } from './utils/auth';

@Injectable({
  providedIn: 'root'
})
export class RoleAclService {
  acl: AccessControl;

  constructor() {
    this.acl = new AccessControl(Auth.grantList);
  }

  getRole() {
    let fetchedUserDetails: any = localStorage.getItem('userDetails');
    if (!fetchedUserDetails) {
      return undefined;
    }
    fetchedUserDetails = JSON.parse(fetchedUserDetails);
    return fetchedUserDetails.role;
  }

  getAllowedMenus(resource: any){
    const role = this.getRole();
    console.log('role at role-acl' + role, resource);
    const allowedActions = this.acl.allowedActionsSync({
      role,
      resource
    });
    console.log('allowedActions' + allowedActions);
    return allowedActions;
  }

  getAllowedSidebars(resource :any) {
    const role = this.getRole();
    console.log('role at role-acl' + role, resource);
    const allowedActions = this.acl.allowedActionsSync({
      role,
      resource
    });
    console.log('allowedActions' + allowedActions);
    return allowedActions;
  }

  // isResourceAllowed(resource: any) {
  //   const role = this.getRole();
  //   console.log('role at role-acl' + role, resource);
  //   console.log(typeof role);
  //   const allowedActions = this.acl.allowedActionsSync({
  //     role,
  //     resource
  //   });
  //   console.log('allowedActions' + allowedActions);
  //   return allowedActions;
  // }

  isNavBarAllowed() {

  };


  isRouteAllowed(resource: string, action: string): boolean {
    const role = this.getRole();
    console.log('role at isRouteAllowed' + role + '' + resource);
    const permission: any = this.acl.can(role).execute(action).sync().on(resource);
    return permission.granted;
  };

  
}
