import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-varden',
  imports: [CommonModule, FormsModule],
  templateUrl: './varden.html',
  styleUrl: './varden.scss',
})

export class Varden {
  cm: number = 0;
  fot: number = 0;

  celcius: number = 0;
  farenheit: number = 0;

  cmToFot(e: Event) {
    e.preventDefault();
    this.fot = this.cm / 30.48;
  }

   celciusToFarenheit(e: Event) {
    e.preventDefault();
    this.farenheit = (this.celcius * 9/5) + 32;
   }
}
