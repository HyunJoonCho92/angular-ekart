import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  searchText: string = '';

  constructor() { }

  ngOnInit() { }


  // 1. Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    // this.searchTextChanged.emit(this.searchText);
  }

  updateSearchText(inputEl: HTMLInputElement) {
    // this.searchText = event.target.value;
    // console.log(inputEl.value);
    this.searchText = inputEl.value;
    this.searchTextChanged.emit(this.searchText);

  }

}
