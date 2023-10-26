import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  slogan: string = 'your one stop shop for everything';
  imgSrc: string = '../../assets/shopping.avif';
  
  getSlogan(){
    return this.slogan;
  }
}
