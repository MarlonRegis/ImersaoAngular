import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursoServicoService } from '././servico/curso-servico.service';
import {Curso} from './servico/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  listacurso: Curso[] = []
  nome : string = '';
  selecionado: Curso;

  pesquisar(){
    this.CursoServicoService.pesquisar(this.nome).subscribe(
      (data: Curso[]) => {
        this.listacurso = data;
      }
    );
  }
  
  incluir(){
    this.router.navigate(['curso/incluir'])
  }

  selecionar(curso: Curso){
    this.selecionado = curso
  }

  alterar(){
    this.router.navigate(['curso/alterar/' + this.selecionado.nome])
  }

  excluir(){
    this.CursoServicoService.remover(this.selecionado).subscribe(date=> {
      alert(date['mensagem'])
    })
  }

  constructor(private router: Router ,
    private CursoServicoService: CursoServicoService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

}
