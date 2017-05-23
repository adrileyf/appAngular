import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {alunos} from './alunos.component';

@NgModule({
    imports:[CommonModule],
    declarations:[alunos],
    exports:[alunos]
})
export class alunosModule{}



