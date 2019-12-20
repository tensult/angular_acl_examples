import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleAclService } from 'src/app/role-acl.service';

@Component({
  selector: 'app-sidebar-emp',
  templateUrl: './sidebar-emp.component.html',
  styleUrls: ['../sidebar.component.css']
})
export class SidebarEmpComponent implements OnInit {

    allowedResources;
    allowedResourcesObject: {};
  
  
    constructor(public router: Router, private service: RoleAclService) { }
  
    ngOnInit() {
      this.allowedResources = this.service.getAllowedMenus('sidebar');
      this.allowedResourcesObject = this.mapValueTokey(this.allowedResources);
      console.log('this.allowedResourcesObject', this.allowedResourcesObject)
      console.log(this.allowedResources);
      if (!this.allowedResources || this.allowedResources.length === 0) {
        this.router.navigate(['']);
      }
    }
  
    mapValueTokey(elements: string[]) {
      return elements.reduce((ele, cur, curInd, arr) => {
        if (arr.indexOf(cur) === curInd) {
          let value = cur.replace(/\s/g, '').toLocaleLowerCase();
          ele[cur] = value;
          return ele;
        }
      }, {})
    }
  
    // removeSpacesAndConvertToSmallLetter(element: string | string[]) {
    //   if (typeof element === 'string') {
    //     return element.replace(/\s/g, '').toLocaleLowerCase();
    //   }
    //   if (element.length > 0) {
    //     element.map((ele) => {
    //       return ele.replace(/\s/g, '').toLocaleLowerCase();
    //     })
    //   }
    // }
  
  }
