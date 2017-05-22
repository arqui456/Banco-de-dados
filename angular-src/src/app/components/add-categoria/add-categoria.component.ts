import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ValidateService} from '../../services/validate.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {
	paginaInicial: Boolean;
	categoria: String;

  constructor(
   private validateService: ValidateService,
   private router:Router,
   private authService:AuthService,
   private flashMessage:FlashMessagesService
   ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
  	const categoria = {
  	  paginaInicial: this.paginaInicial,
  	  categoria: this.categoria
  	}

  	if(!this.validateService.validateCategoria(categoria)){
  		this.flashMessage.show('Por favor preencha todos os campos!', {cssClass: 'alert-danger', timeout: 3000});
  		return false;
  	}

  	this.authService.registerCategoria(categoria).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Categoria Cadastrada com sucesso!', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/add-categoria']);
      } else {
          this.flashMessage.show('Algo deu errado!', {cssClass: 'alert-danger', timeout: 3000});
          this.router.navigate(['/add-categoria']);
      }
    });
}

}



  	


