import {Component, Input} from '@angular/core';
import {UsersServiceService} from './shared/users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inactiveUsers;
  activeUsers;
  counter = 0;
  constructor (private userService: UsersServiceService) {
    this.inactiveUsers = userService.inactiveUsers;
    this.activeUsers = userService.activeUsers;
    this.userService.statusChanged.subscribe( () => this.counter++);
  }
  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
