import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListserviceService {

  constructor() { }

  getCourse(){

    return ['Java','Cpp','Angular','JavaScript'];  
  }
}
