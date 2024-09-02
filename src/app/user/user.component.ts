import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

interface User {
  id:string,
  name:string,
  avatar:string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  @Input() user?: User;
  @Output() select = new EventEmitter<string>();
  @Input() selected?: boolean;

  get imagePath() {
    return 'assets/users/' + this.user?.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}
