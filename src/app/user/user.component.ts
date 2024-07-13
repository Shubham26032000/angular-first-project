import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
type User = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //#without required (below one are signal)
  // @Input() avatar!:string;
  // @Input() name!:string;
  // avatar = input<string>();
  // name = input<string>();
  @Input({ required: true }) user!: User;
  //#with required  (below on are signal)
  //   avatar = input.required<string>();
  //   name = input.required<string>();
  //   imagePath = computed(()=>{
  //    return 'assets/users/'+this.avatar()
  // });
  @Output() select = new EventEmitter<string>();
  // select = output<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/'+this.selectedUser().avatar)

  ////we use singal instead below line
  // get imagePath(){
  //   return 'assets/users/'+this.selectedUser.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
