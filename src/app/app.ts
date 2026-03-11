import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exo1 } from './components/exo1/exo1';
import { Exo2 } from './components/exo2/exo2';
import { Exo3 } from './components/exo3/exo3';
import { Exo4 } from './components/exo4/exo4';
import { Exo5 } from './components/exo5/exo5';
import User from './model/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Exo1, Exo2, Exo3, Exo4, Exo5],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Exo2-Angular');

  users: User[] = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true },
  ];
}
