import { CursoServicoService } from './curso/servico/curso-servico.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CursoComponent } from './curso/curso.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { CursomanterComponent } from './curso/cursomanter/cursomanter.component';

import {HttpClientModule} from '@angular/common/http';
import { AlunomanterComponent } from './aluno/alunomanter/alunomanter.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    AlunoComponent,
    CursoComponent,
    MatriculaComponent,
    CursomanterComponent,
    AlunomanterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CursoServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
