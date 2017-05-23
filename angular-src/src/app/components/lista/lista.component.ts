import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
	filme:Object;

  constructor(
  private authService:AuthService,
  private router:Router
  ) { }

  ngOnInit() {
  this.authService.getFilme().subscribe(gerenciador => {
      this.filme = gerenciador.filme;
    },
    err => {
    	console.log(err);
    	return false; 
    });
  }

}
