import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asignment-letter',
  templateUrl: './asignment-letter.component.html',
  styleUrls: ['./asignment-letter.component.css']
})
export class AsignmentLetterComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
     console.log('asignment-letter url'+this.router.url);
  }

}
