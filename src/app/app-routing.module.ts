import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursomanterComponent } from './curso/cursomanter/cursomanter.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'curso',
    component: CursoComponent,
    pathMatch: 'full'
  },
  {
    path:'curso/incluir',
    component: CursomanterComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
