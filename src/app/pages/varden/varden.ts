import { Component } from '@angular/core';

@Component({
  selector: 'app-varden',
  imports: [],
  templateUrl: './varden.html',
  styleUrl: './varden.scss',
})
export class Varden {}

// Räkna ut fot till meter
const userNumber = "text";

const formFot = document.getElementById("formFot") as HTMLElement;
const inputMeter = document.getElementById("inputNumberMeter") as HTMLInputElement;

function cmToFot(cm: number): number {
  return cm / 30.48;
}

formFot.addEventListener("submit", (e) => {
  e.preventDefault();

  const cm = Number(inputMeter.value);
  const fot = cmToFot(cm);
});

// Räkna ut celcius till farenheit
const formCelcius = document.getElementById("formCelcius") as HTMLElement;
const inputCelcius = document.getElementById("inputNumberCelcius") as HTMLInputElement;