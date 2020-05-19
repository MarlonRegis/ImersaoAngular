import { Curso } from './curso';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoServicoService {

  constructor(public HttpClient: HttpClient) { }

  pesquisar(nome){
    return this.HttpClient.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/consultar/" +nome);
  }

  incluir(curso: Curso){
    return this.HttpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/incluir", curso);
  }

  alterar(curso: Curso){
    return this.HttpClient.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/alterarparcial", curso);
  }

  remover(curso: Curso){
    return this.HttpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/remover", curso);
  }

}
