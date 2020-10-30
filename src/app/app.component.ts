import { Component } from '@angular/core';
import { User } from './User'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: User={
    id: 1,
    name: 'kim',
    phone: '01033593878',
    email: 'sleepy@naver.com'
  }
}
