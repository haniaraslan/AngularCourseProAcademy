import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    products = [
      {id:1, name: 'mini dress', price: '1000', color: 'mint', available : "available", image: '/assets/products/dress1.jpg'},
      {id:2, name: 'ruffled mini dress', price: '1500', color: 'navy', available : "not available", image: '/assets/products/dress2.jpg'},
      {id:3, name: 'asymmetric dress', price: '2000', color: 'camel', available : "available", image: '/assets/products/dress3.jpg'},
      {id:4, name: 'layered dress', price: '9999', color: 'red', available : "not available", image: '/assets/products/dress4.jpg'},
      {id:5, name: 'ruffled long dress', price: '25000', color: 'yellow', available : "available", image: '/assets/products/dress5.jpg'},
      {id:6, name: 'long sleeve dress', price: '1658', color: 'orange', available : "available", image: '/assets/products/dress6.jpg'}
    ]
  }
