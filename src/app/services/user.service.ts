import { Injectable, signal } from '@angular/core';
import { UserInterface } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users=signal<UserInterface []>([])

getUser(){
return this.users
}
setUser(user:UserInterface){
  this.users.update(actualUsers=>[...actualUsers, user])
}
  constructor() { }
}
