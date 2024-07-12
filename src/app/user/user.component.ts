import { Component , computed, input, Input, signal} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  //#without required (below one are signal)
  // @Input() avatar!:string;
  // @Input() name!:string;
  // avatar = input<string>();
  // name = input<string>();

//#with required  (below on are signal)
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
//   avatar = input.required<string>();
//   name = input.required<string>();
//   imagePath = computed(()=>{
//    return 'assets/users/'+this.avatar()
// });
  get imagePath(){
    return 'assets/users/'+this.avatar;
  }

  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/'+this.selectedUser().avatar)

  ////we use singal instead below line
  // get imagePath(){
  //   return 'assets/users/'+this.selectedUser.avatar;
  // }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
