import { Component } from '@angular/core';
import Product from '../../model/products.model';


@Component({
  selector: 'app-exo2',
  imports: [],
  templateUrl: './exo2.html',
  styleUrl: './exo2.css',
})

export class Exo2 {
    products:Product[] = [
    { name: "Clavier", price: 50, stock: true },
    { name: "Souris", price: 25, stock: true },
    { name: "Écran", price: 200, stock: false }
  ];
}
