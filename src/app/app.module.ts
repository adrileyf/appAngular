import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import {AppComponent } from './app.component';
import {Produto } from './produto/produto.component';
 
import {CursosModule } from './cursos/cursos.module';
import {alunosModule} from './alunos/alunos.module';
import {FuncionarioModule} from './funcionario/funcionario.module';
@NgModule({
  declarations: [
    AppComponent,
         Produto        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule,
    alunosModule,
    FuncionarioModule    
  ],
  providers: [],
  bootstrap: [Produto]
})
export class AppModule { }
