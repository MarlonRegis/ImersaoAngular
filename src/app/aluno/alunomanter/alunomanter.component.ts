import { Router, ActivatedRoute } from '@angular/router';
import { AlunoServicoService } from './../servico/aluno-servico.service';
import { Aluno } from './../servico/aluno-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunomanter',
  templateUrl: './alunomanter.component.html',
  styleUrls: ['./alunomanter.component.scss']
})
export class AlunomanterComponent implements OnInit {
  aluno: Aluno = new Aluno();
  operacao: string = 'Incluir';

  incluir() {
    this.alunoServicoService.incluir(this.aluno).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/aluno']);
      }
    );

  }
  voltar() {
    this.router.navigate(['/aluno']);
  }
  alterar(){
    this.alunoServicoService.alterar(this.aluno).subscribe(data=> {
      alert(data['mensagem']);
      this.router.navigate(['/aluno'])
    })
  }

  constructor(private alunoServicoService: AlunoServicoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let nome: string = this.activatedRoute.snapshot.params.nome;
    if (nome != null) {
      this.operacao = 'Alterar';
      this.alunoServicoService.consultar(nome).subscribe(
        data => {
          this.aluno = (<Aluno[]>data)[0];
        }
      );
    }

  }

}
