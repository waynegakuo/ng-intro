import { User } from './models/user.model';
import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Introduction to Angular';

  constructor(private userService: UserService) {
    // this.user$ = this.userService.getUser();
    // this.url = this.userService.url;
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {

  }
}
