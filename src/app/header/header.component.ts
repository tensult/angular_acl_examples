import { Component, OnInit } from '@angular/core';
import { RoleAclService } from '../role-acl.service';
import { Auth } from '../utils/auth';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  allowedResources;
  allowedResourcesObject : {};

  constructor(public router: Router, private service: RoleAclService) {
  }

  ngOnInit() {
    this.allowedResources = this.service.getAllowedMenus('header');
    console.log(this.allowedResources);
    this.allowedResourcesObject = this.mapValueTokey(this.allowedResources)
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

}
