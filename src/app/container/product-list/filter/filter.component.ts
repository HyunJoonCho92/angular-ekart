import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent  implements OnInit {

  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  selectedFilterRadioButton: string = 'all';

  constructor() { }

  ngOnInit() {}

  OnSelectedFilterRadioButtonChanged(){
    console.log("selectedFilterRadioButtonChanged event raised");
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
  }

}
