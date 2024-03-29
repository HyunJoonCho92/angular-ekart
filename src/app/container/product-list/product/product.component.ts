import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent  implements OnInit {
  @Input()
  product:{
    id: number, 
    name: string, 
    description: string,
    brand: string,
    size: number[],
    color: string[],
    price: number,
    discountPrice?: number,
    is_in_inventory: boolean,
    items_left: number,
    imageURL: string,
    slug: string,
    gender?: string,
    category?: string
  };

  constructor() { }

  ngOnInit() {}

}
