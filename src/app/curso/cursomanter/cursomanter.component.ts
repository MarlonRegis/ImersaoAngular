import { Router, ActivatedRoute } from '@angular/router';
import { CursoServicoService } from './../servico/curso-servico.service';
import { Curso } from './../servico/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursomanter',
  templateUrl: './cursomanter.component.html',
  styleUrls: ['./cursomanter.component.scss']
})
export class CursomanterComponent implements OnInit {
  curso: Curso = new Curso();
  operacao: string = 'Incluir';

  incluir() {
    this.cursoServicoService.incluir(this.curso).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/curso']);
      }
    );

  }
  voltar() {
    this.router.navigate(['/curso']);
  }
  alterar(){
    this.cursoServicoService.alterar(this.curso).subscribe(data=> {
      alert(data['mensagem']);
      this.router.navigate(['/curso'])
    })
  }

  constructor(private cursoServicoService: CursoServicoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let nome: string = this.activatedRoute.snapshot.params.nome;
    if (nome != null) {
      this.operacao = 'Alterar';
      this.cursoServicoService.pesquisar(nome).subscribe(
        data => {
          this.curso = (<Curso[]>data)[0];
        }
      );
    }

  }

}
