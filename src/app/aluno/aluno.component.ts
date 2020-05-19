import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoServicoService } from '././servico/aluno-servico.service';
import {Aluno} from './servico/aluno-model';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})

export class AlunoComponent implements OnInit {
  listaaluno: Aluno[] = []
  nome : string = '';
  selecionado: Aluno;

  pesquisar(){
    this.alunoServicoService.consultar(this.nome).subscribe(
      (data: Aluno[]) => {
        this.listaaluno = data;
      }
    );
  }
  
  incluir(){
    this.router.navigate(['aluno/incluir'])
  }

  selecionar(aluno: Aluno){
    this.selecionado = aluno
  }

  alterar(){
    console.log(['aluno/alterar/' + this.selecionado.nome])
    this.router.navigate(['aluno/alterar/' + this.selecionado.nome])
  }

  excluir(){
    this.alunoServicoService.remover(this.selecionado).subscribe(date=> {
      alert(date['mensagem'])
    })
  }

  constructor(private router: Router ,
    private alunoServicoService: AlunoServicoService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

}
