import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PType } from 'src/app/shared/pokemonType.model';
import { User } from 'src/app/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  $currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor() {    
    let someUserString = localStorage.getItem ('user');
    if(someUserString){
      let user = JSON.parse(someUserString) as User;
      if(user.isSignedIn){
        this.$currentUser.next(user);
      }
    }
   }

  signIn(login: string, password: string) {
    if (login == 'user' && password == 'user') {
     let someUser=localStorage.getItem ('user');
     if(someUser){
      let user =  JSON.parse(someUser) as User;
      this.$currentUser.next(user)
     }else{
      let user = {} as User
      user.login = 'user';
      user.password = 'user';
      user.isSignedIn = true;
      user.cartList = [];
      localStorage.setItem('user',JSON.stringify(user));
      this.$currentUser.next(user)
     }
    }
  }
  logOut(){
    let user = this.$currentUser.getValue();
    if(user){
      user.isSignedIn = false;
      localStorage.setItem('user',JSON.stringify(user));
    }
    this.$currentUser.next(null);
  }
  addToCart(pokemon:PType){
    debugger
    let user = this.$currentUser.getValue();
    if(user){
      user.cartList.push(pokemon);
      localStorage.setItem('user',JSON.stringify(user));
    }
  };
  removeFromCart(pokemon:PType){
    let user = this.$currentUser.getValue();
    if(user){
     let index = user.cartList.findIndex(p=>p.id==pokemon.id);
     user.cartList = user.cartList.splice(index,1);
     localStorage.setItem('user',JSON.stringify(user));
    }
  }

}
