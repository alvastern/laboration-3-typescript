import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNav } from "./partials/header-nav/header-nav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderNav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('laboration-3-typescript');
}
