import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
	filme:Object;	

  constructor(
  private authService:AuthService,
  private router:Router
  ) { }

  ngOnInit() {
  }

}
