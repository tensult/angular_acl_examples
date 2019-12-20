import { Component, OnInit } from '@angular/core';
import { RoleAclService } from '../role-acl.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: RoleAclService) { 
  }

  ngOnInit() {
  }

}
