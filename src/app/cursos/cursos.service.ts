import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){

    return ['JAVA','DELPHI','ANGULAR','ASP','C#']; 
  }
  getNotas(){

    return  'BUSCAR NOTAS ';  

  }

}
