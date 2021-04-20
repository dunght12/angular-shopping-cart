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

  inputQuantity(event: any, id: any) {
    // console.log(typeof event.value, 'sản phẩm');
    console.log(id, 'id của sản phẩm thay đổi');
    const qTy = Number(event.value);
    console.log(qTy, 'QTy');

    this.onUpdateProduct.emit({ id: id, value: qTy });
  }
}
