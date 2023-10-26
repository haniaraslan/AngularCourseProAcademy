import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<div class = "alert alert-secondary" [ngClass] = "{fadeOut : displayNotification}">this website uses cookies to provide better user experience.<div class = "close-div"><button class="btn" (click)="closeNotification($event)">X</button></div></div>',
  styles: ['.notification-div{margin: 10px 0px; background-color:#dccbc5; text-align:center;}', 'p{font-size:14px}', '.close-div{float:right; margin-top: -15px;}',
    '.fadeOut{visibility: hidden; opacity: 0; transition: visibility 2s, opacity 2s linear;}'
]
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification(isClicked:Event){
    console.log(isClicked);
    if(isClicked)
      this.displayNotification = true;
  }
}
