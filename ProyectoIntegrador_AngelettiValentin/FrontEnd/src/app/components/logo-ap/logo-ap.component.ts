import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {

  constructor(private router:Router ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login(){
    this.router.navigate(['/login'])
  }
}
