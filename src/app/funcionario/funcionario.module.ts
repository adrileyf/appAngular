import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from './funcionario';
@NgModule({
    imports:[ CommonModule],
    declarations:[Funcionario],
    exports:[Funcionario]


})
export class FuncionarioModule{}
 