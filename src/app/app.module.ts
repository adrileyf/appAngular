import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import {AppComponent } from './app.component'; 
import {CursosModule } from './cursos/cursos.module';
import {CursosService} from './cursos/cursos.service';
 
@NgModule({
  declarations: [
    AppComponent
                  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule   
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
