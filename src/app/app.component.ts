import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  aBlock = 0.20; //m
  bBlock = 0.10; //m
  a: number;
  b: number;
  answerA: number;
  answerB: number;
  answer: number;
  cost = 1.2;
  finalCost: number;
  dolarCost: number;

  calculate(a,b){
    this.answerA = a / this.aBlock;
    this.answerB = b / this.bBlock;
    this.answer = this.answerA * this.answerB;
    this.answer = Math.round(this.answer);
    this.finalCost = this.answer * this.cost;
    this.dolarCost = Math.round(this.finalCost / 6.99);
  }
}


