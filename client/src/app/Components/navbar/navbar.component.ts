import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slider} from "../../route-animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
