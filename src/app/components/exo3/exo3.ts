import { Component } from '@angular/core';
import Product from '../../model/products.model';


@Component({
  selector: 'app-exo3',
  imports: [],
  templateUrl: './exo3.html',
  styleUrl: './exo3.css',
})

export class Exo3 {
  tasks: string[] = [];
  products: Product[] = [
    { name: 'Clavier', price: 50, stock: true },
    { name: 'Souris', price: 25, stock: true },
    { name: 'Écran', price: 200, stock: true },
  ];
}
