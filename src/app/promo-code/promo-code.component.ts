import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
  styleUrls: ['./promo-code.component.css']
})
export class PromoCodeComponent implements OnInit {
  promoCode: any;
  @Output() onApplyPromeCode = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  applyPromoCode(){
    const code = this.promoCode.trim().toUpperCase();
    console.log(code, "..code nhập vào");
    
    if (code && code.trim() !== '') {
      this.onApplyPromeCode.emit(code);
    }
    
    
  }
}
