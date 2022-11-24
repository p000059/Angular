import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {

    name = "Lucas Lima";
    email = "lucas.lima@gmail.com";
    birth = "1995-01-01";
    urlImagem = "/assets/casa1.png";

    showBirth(){
      alert(`Date Birth:  ${this.birth}`)
    }
}
