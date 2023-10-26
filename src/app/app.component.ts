import { Component } from '@angular/core';

@Component({ //decorator
  selector: 'app-root', //this can be used as an html tag
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first project';
  name = "hania";
  message = "blah1 blah 1 blah1 blah 1 blah1 blah 1 blah1 blah 1 blah1 blah 1 blah1 blah 1 blah1 blah 1 ";
}
