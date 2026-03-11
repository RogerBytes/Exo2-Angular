import { Component } from '@angular/core';

@Component({
  selector: 'app-exo5',
  imports: [],
  templateUrl: './exo5.html',
  styleUrl: './exo5.css',
})
export class Exo5 {
  isAdmin:boolean = true;

  users:any[] = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true },
  ];
}
