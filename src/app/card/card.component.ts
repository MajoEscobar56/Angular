import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image:string="https://i.pinimg.com/564x/d1/42/c6/d142c6f4ff490f94870e2cf7b3c7ac27.jpg";
  public Titulo:string= "Curso de Angular con interpolacion";
  constructor() {}
  
    ngOnInit(): void{
  }

}
