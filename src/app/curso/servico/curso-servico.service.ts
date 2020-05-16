import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursoServicoService {

  constructor(public HttpClient: HttpClient) { }

  pesquisar(nome: string){
    return this.HttpClient.get('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/consultar/'+ nome)
  }

}
