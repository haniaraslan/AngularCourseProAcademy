import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  searchInput:string = '';
  changeSearchValue(eventData: Event){
    //console.log((<HTMLInputElement>eventData.target).value);
    this.searchInput = (<HTMLInputElement>eventData.target).value;
    console.log(this.searchInput);
  }
}
