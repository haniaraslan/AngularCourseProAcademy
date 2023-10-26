import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  slogan: string = 'Your One Stop Shop for Everything';
  imgSrc: string = '../../assets/websiteIcon.png';
  
  getSlogan(){
    return this.slogan;
  }
}
