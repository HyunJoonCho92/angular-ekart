import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {

  constructor() { }

  name = "HyunJoon";

  addToCart: number = 0;
  product = {
    name: "iPhone",
    price: 999,
    color: 'Red',
    discount: 8.5,
    inStock: 10,
    pImage: '/assets/images/sample.png'
  }
  ngOnInit() { }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

  onNameChange(event: any) {
    // this.name = "Mark";
    this.name = event.target.value;
    console.log(event.target.value);
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  incrementCartValue() {
    if (this.product.inStock > this.addToCart) {
      this.addToCart++;

    }
  }


  ////////////////////////
  listOfString: string[] = ['Apple', 'Banana', 'Cherry', 'Dates', 'Elderberry'];

  
  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }


  controlwrapHeight: string = '100px';
}
