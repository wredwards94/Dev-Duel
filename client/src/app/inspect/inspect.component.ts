import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import EmptyUser from "../model/EmptyUser";

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = ""
  userData: EmptyUser = {
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

  errorMessage: string = ''
  isUserVisible: boolean = false;

  constructor(private userService: UserService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService.inspectUser(this.username)
    .then(data => {
      this.userData = data as EmptyUser
      this.isUserVisible = true
    })
    .catch(error => {
      this.isUserVisible = false
      this.errorMessage = "this user was not found "
    });
  }
}
