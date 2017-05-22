import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
  	if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
  		return false;
  	} else {
  		return true;
  	}
  }

  validateFilme(filme){
    if(filme.title == undefined || filme.avaliacao == undefined || filme.cena1 == undefined || filme.cena2 == undefined || filme.cena3 == undefined || filme.descricao == undefined || filme.trailer == undefined || filme.categoria == undefined ){
      return false;
    } else {
      return true;
    }
  }

  validateCategoria(categoria){
    if(categoria.paginaInicial == undefined || categoria.categoria== undefined){
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
  	    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	    return re.test(email);
  }

  

}
