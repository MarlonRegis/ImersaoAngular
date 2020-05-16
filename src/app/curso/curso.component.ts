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


  constructor(private router: Router ,
    private CursoServicoService: CursoServicoService) { }

  ngOnInit(): void {
    this.pesquisar();
  }

}
