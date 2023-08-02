import { Component } from '@angular/core';

export interface Caculator {
  firstNum: string;
  secondNum: string;
  operator: string;
  result: string;
}

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss'],
})
export class CaculatorComponent {
  caculator: Caculator = {
    firstNum: '',
    secondNum: '',
    operator: '',
    result: '',
  };

  constructor() {}

  // Function to handle button click event
  onButtonClick(input: string) {
    switch (input) {
      case 'ac':
        this.clearAll();
        break;
      case 'ce':
        this.clearEntry();
        break;
      case '=':
        this.calculateResult();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        this.setOperator(input);
        break;
      default:
        this.appendNumber(input);
        break;
    }
  }

  clearAll() {
    this.caculator.firstNum = '';
    this.caculator.secondNum = '';
    this.caculator.operator = '';
    this.caculator.result = '';
  }

  clearEntry() {
    if (this.caculator.operator === '') {
      this.caculator.firstNum = '';
    } else {
      this.caculator.secondNum = '';
    }
  }

  appendNumber(input: string) {
    if (this.caculator.operator === '') {
      this.caculator.firstNum += input;
    } else {
      this.caculator.secondNum += input;
    }
  }

  setOperator(input: string) {
    if (this.caculator.operator === '' && this.caculator.firstNum !== '') {
      this.caculator.operator = input;
    }
  }

  calculateResult() {
    const firstNum = parseFloat(this.caculator.firstNum);
    const secondNum = parseFloat(this.caculator.secondNum);
    switch (this.caculator.operator) {
      case '+':
        this.caculator.result = (firstNum + secondNum).toString();
        break;
      case '-':
        this.caculator.result = (firstNum - secondNum).toString();
        break;
      case '*':
        this.caculator.result = (firstNum * secondNum).toString();
        break;
      case '/':
        this.caculator.result = (firstNum / secondNum).toString();
        break;
      default:
        break;
    }
  }

  displayResult(input: string){
    console.log(input);
  }
}