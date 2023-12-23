import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import EmptyUser from "../model/EmptyUser";

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""
  userOneAvatar: string = ""
  userTwoAvatar: string = ""

  users: EmptyUser[] = []

  user1: EmptyUser = {
    username: '',
    name: '',
    location: '',
    bio: '',
    avatar_url: '',
    titles: [],
    'favorite-language': '',
    'public-repos': 0,
    'total-stars': 0,
    'highest-starred': 0,
    'perfect-repos': 0,
    followers: 0,
    following: 0
  }

  user2: EmptyUser = {
    username: '',
    name: '',
    location: '',
    bio: '',
    avatar_url: '',
    titles: [],
    'favorite-language': '',
    'public-repos': 0,
    'total-stars': 0,
    'highest-starred': 0,
    'perfect-repos': 0,
    followers: 0,
    following: 0
  }

  isUserVisible: boolean = false;
  errorMessage: string = ''

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  onSubmit() {
    this.userService.duelUsers(this.usernameOne, this.usernameTwo)
    .then(data => {
      this.users = data as EmptyUser[]
      if(this.users.length == 2) {
        this.user1 = this.users[0]
        this.user2 = this.users[1]
        console.log(this.user1)
        console.log(this.user2)
        this.isUserVisible = true
      }
    })
    .catch(error => {
      this.isUserVisible = false
      this.errorMessage = 'One or more user(s) does not exists'
      console.error('One or more user(s) does not exists')
    })
  }
}
