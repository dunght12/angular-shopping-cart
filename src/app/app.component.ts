import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { PromoCode } from './promo-code.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'angular-shopping-cart';
  numberItems: number = 0;
  subTotal: number = 0;
  tax: number = 0;
  taxPercent: number = 10;
  total: number = 0;
  discount: number = 0;
  discountPercent: number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'Samsung Galaxy S21 Ultra 5G, 128GB',
      description: 'SM-G998B/DS',
      thumbnail:
        'https://cdn.nguyenkimmall.com/images/thumbnails/600/336/detailed/711/10048377-dien-thoai-samsung-galaxy-s21-ultra-12gb-128gb-den-1.jpg',
      price: 905.99,
      quantity: 4,
    },
    {
      id: '2',
      name: 'iPhone 12 Pro, 128GB',
      description: 'iPhone 12 Pro 128GB, Black',
      thumbnail:
        'https://cdn.nguyenkimmall.com/images/thumbnails/600/336/detailed/698/10047716-dien-thoai-iphone-12-pro-128gb-xanh-1.jpg',
      price: 1215.99,
      quantity: 1,
    },
    {
      id: '3',
      name: 'iPhone 12, 128GB',
      description: 'iPhone 12 128GB, White',
      thumbnail:
        'https://cdn.nguyenkimmall.com/images/thumbnails/600/336/detailed/698/10047704-dien-thoai-iphone-12-128gb-trang-1.jpg',
      price: 965.99,
      quantity: 1,
    },
  ];

  promoCodes: PromoCode[] = [
    { code: 'DC20', discountPecent: 20 },
    { code: 'DC10', discountPecent: 10 },
    { code: 'DC07', discountPecent: 7 },
    { code: 'DC05', discountPecent: 5 },
    { code: 'DC03', discountPecent: 3 },
  ];

  ngOnInit() {
    this.updateCartSummary();
  }

  updateCartSummary() {
    // let numberItems = 0;
    this.numberItems = 0;
    let subTotal = 0;
    let tax = 0;
    let total = 0;
    let discount = 0;
    for (const product of this.products) {
      console.log(product,'hhahahaha');
      
      this.numberItems += product.quantity;
      // subTotal += product.price * product.quantity;
      // tax = ((subTotal - discount) * this.taxPercent) / 100;
      // total = subTotal + tax;
    }
    // this.numberItems = numberItems;
    this.subTotal = subTotal;
    this.tax = tax;
    this.total = total;
  }
  removeProduct(productId: any) {
    // xóa sản phẩm
    const index = this.products.findIndex(
      (product: any) => product.id === productId
    );
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    console.log(this.products, 'mảng sau remove');

    // Tính lại tổng số lượng và tổng tiền
    this.updateCartSummary();
  }

  // update lại số lượng sau thay đổi
  // handleupdateQtyProduct(data:{id:string, quantity:number}) {
  //   const product = this.products.find(item => item.id === data.id);
  //   if(product){
  //     product.quantity = data.quantity || 0;
  //   }
  //   this.updateCartSummary();
  // }

  handleupdateQtyProduct(event: any) {
    // const product = this.products.find(item => item.id === data.id);
    // if(event.value){
      // console.warn(event);
      this.products = event;
    // }
    this.updateCartSummary();
  }

  // nhập mã giảm giá
  handleApplyPromoCode(code: string) {
    const promoCode = this.promoCodes.find(
      (promoCode) => promoCode.code === code
    );
    console.log(promoCode, 'truyền code sang app');

    this.discountPercent = promoCode ? promoCode.discountPecent : 0;
    console.log(this.discountPercent, '% giảm giá');

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
    if (this.discount > 0) {
      alert('The promotion code was applied');
      console.log('The promotion code was applied');
    } else {
      alert('Please check promotion code again. Try code : DC20, DC10, ....');
    }
  }

 
}
