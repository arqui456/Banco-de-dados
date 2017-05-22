import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import  {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
	authToken: any;
	user: any;
  filme: any;
  categoria: any;

  constructor(private http:Http) { }

  registerUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:8080/users/register', user, {headers: headers}) 
  	  .map(res => res.json());
  }

  registerFilme(filme){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/filmes/gerenciador', filme, {headers: headers}) 
      .map(res => res.json());
  }

  registerCategoria(categoria){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/categorias/add-categoria', categoria, {headers: headers}) 
      .map(res => res.json());
  }

  authenticateUser(user){
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers}) 
  	  .map(res => res.json());
  }

  getProfile(){
	  let headers = new Headers();
	  this.loadToken();
	  headers.append('Authorization', this.authToken);
	  headers.append('Content-Type', 'application/json');
	  return this.http.get('http://localhost:8080/users/profile', {headers: headers})  
	    .map(res => res.json());
  }

  getFilme(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8080/filmes/gerenciador', {headers: headers})  
      .map(res => res.json());
  }

  storeUserData(token, user){
  	localStorage.setItem('id_token', token);
  	localStorage.setItem('user', JSON.stringify(user));
  	this.authToken = token;
  	this.user = user;
  }

  loadToken(){
  	const token = localStorage.getItem('id_token');
  	this.authToken = token;
  }

  logout(){
  	this.authToken = null;
  	this.user = null;
  	localStorage.clear();
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }
}
