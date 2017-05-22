import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-gerenciador',
  templateUrl: './gerenciador.component.html',
  styleUrls: ['./gerenciador.component.css']
})
export class GerenciadorComponent implements OnInit {
	title: String;
	categoria: String;
	avaliacao: String;
	cena1: String;
	cena2: String;
	cena3: String;
	descricao: String;
	trailer: String;

  constructor(
   private validateService: ValidateService,
   private router:Router,
   private authService:AuthService,
   private flashMessage:FlashMessagesService
   ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
  	const filme = {
  	  title: this.title,
  	  categoria: this.categoria,
  	  avaliacao: this.avaliacao,
  	  cena1: this.cena1,
  	  cena2: this.cena2,
  	  cena3: this.cena3,
  	  descricao: this.descricao,
  	  trailer: this.trailer
  	}

  	if(!this.validateService.validateFilme(filme)){
  		this.flashMessage.show('Por favor preencha todos os campos!', {cssClass: 'alert-danger', timeout: 3000});
  		return false;
  	}

  	this.authService.registerFilme(filme).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Filme Cadastrado com sucesso!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/gerenciador']);
      } else {
          this.flashMessage.show('Algo deu errado!', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/gerenciador']);
      }
    });

}

}