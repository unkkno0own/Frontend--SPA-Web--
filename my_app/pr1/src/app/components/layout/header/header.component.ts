import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public appTitle: string = 'IT-33-4 Frontend-розробка SPA Web-додатків'; 
}