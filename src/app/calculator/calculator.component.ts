import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  buttons = [
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '/', value: '/' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '*', value: '*' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '-', value: '-' },
    { label: '0', value: '0' },
    { label: '.', value: '.' },
    { label: '=', value: '=' },
    { label: '+', value: '+' },
    { label: 'C', value: 'C' },
  ];

  displayValue = '0';
  currentInput = '';
  operator = '';
  hasDecimal = false;

  handleButtonClick(value: string, btn:any): void {
    if (this.isNumber(value)) {
      this.appendToInput(value);
    } else if (value === '.') {
      this.handleDecimal();
    } else if (this.isOperator(value)) {
      this.handleOperator(value);
    } else if (value === 'C') {
      this.clear();
    } else if (value === '=') {
      this.calculate();
    }
  }

  isNumber(value: string): boolean {
    return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
  }

  isOperator(value: string): boolean {
    return ['+', '-', '*', '/'].includes(value);
  }

  clear(): void {
    this.displayValue = '0';
    this.currentInput = '';
    this.operator = '';
    this.hasDecimal = false;
  }

  calculate(): void {
    const inputValue = parseFloat(this.currentInput);

    if (isNaN(inputValue)) {
      // Handle invalid input
      this.displayValue = 'Error';
      return;
    }

    switch (this.operator) {
      case '+':
        this.displayValue = (parseFloat(this.displayValue) + inputValue).toString();
        break;
      case '-':
        this.displayValue = (parseFloat(this.displayValue) - inputValue).toString();
        break;
      case '*':
        this.displayValue = (parseFloat(this.displayValue) * inputValue).toString();
        break;
      case '/':
        if (inputValue === 0) {
          this.displayValue = 'Error';
          return;
        }
        this.displayValue = (parseFloat(this.displayValue) / inputValue).toString();
        break;
    }

    this.currentInput = '';
    this.operator = '';
    this.hasDecimal = false;
  }

  handleDecimal(): void {
    if (!this.hasDecimal) {
      this.appendToInput('.');
      this.hasDecimal = true;
    }
  }

  handleOperator(value: string): void {
    if (this.currentInput !== '') {
      this.calculate();
    }
    this.operator = value;
  }

  appendToInput(value: string): void {
    this.currentInput += value;
    this.displayValue = this.currentInput;
  }
}

