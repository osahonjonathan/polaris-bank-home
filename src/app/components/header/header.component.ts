import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentUser: string = "Charles Agada";
  date: string = "18-03-2024";
  time: string = "12-18-51";
}
