import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersServiceService} from '../shared/users-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();
  constructor(private userService: UsersServiceService) {
  }
  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
    this.userService.statusChanged.emit();
  }
}
