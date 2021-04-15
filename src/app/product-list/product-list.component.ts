import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products!: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateProduct = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  removeProduct(productId: string): void {
    this.onRemoveProduct.emit(productId);
    // const index = this.products.findIndex((product:any) => product.id === productId);
    // if (index !== -1) {
    //   this.products.splice(index,1);
    // }
    // console.log(this.products, "mảng sau remove");
  }
  // updateQuantityProduct(data:{id: string; quantity: number}){
  //   const product = this.products.find(item => item.id === data.id);
  //   if (product) {
  //     product.quantity = data.quantity || 0;
  //   }
  // }
  // inputQuantity(product:{id:string, quantity: number}){
  //   console.log(product.id,"in số lượng trong input");

  //   if (product.quantity > 0 && product.quantity < 99) {
  //     this.onUpdateProduct.emit(product);
  //   }

  inputQuantity(event: any, id: any) {
    // console.log(event.value,"abc");

    this.products[id].quantity = event.value;
    console.log(this.products[id]);
    this.onUpdateProduct.emit(this.products);
  }
}
