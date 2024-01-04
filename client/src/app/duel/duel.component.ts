import {Component, OnInit} from '@angular/core';
import {UserService} from 'src/user.service';
import EmptyUser from "../model/EmptyUser";
import * as bootstrap from "bootstrap";

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""
  users: EmptyUser[] = []
  choices: string[] = ['titles', 'public repos', 'total stars',
    'highest starred', 'perfect repos', 'following', 'followers']
  winner: string = ''
  alertMessage: string = ''
  isUserVisible: boolean = false
  showAlert: boolean = false
  errorMessage: string = ''
  modalTitle: string = ''
  modalMessage: string = ''

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

  constructor(private userService: UserService) {
  }

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
        if (this.users.length == 2) {
          this.user1 = this.users[0]
          this.user2 = this.users[1]
          this.isUserVisible = true
          this.showAlert = false
        }
      })
      .catch(error => {
        this.isUserVisible = false
        this.showAlert = true
        this.errorMessage = "One or more user(s) does not exist. Please enter valid username(s)."
      })
  }

  showModal() {
    const modal = document.getElementById('staticBackdrop');
    if (modal) {
      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();
    }
  }

  chooseWinner(choice: any) {
    let winMessage: string = ' is the winner!'
    let tieMessage: string = 'Well well well, looks like we have a draw...'

    switch (choice.target.value) {
      case 'titles':
        if (this.user1.titles.length > this.user2.titles.length) {
          this.winner = this.user1.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user2.titles.length > this.user1.titles.length) {
          this.winner = this.user2.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user1.titles.length === this.user2.titles.length) {
          this.modalTitle = "It's a draw"
          this.modalMessage = tieMessage
          this.showModal()
        }
        break


      case "public repos":
        if (this.user1["public-repos"] > this.user2["public-repos"]) {
          this.winner = this.user1.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user2["public-repos"] > this.user1["public-repos"]) {
          this.winner = this.user2.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user1["public-repos"] === this.user2["public-repos"]) {
          this.modalTitle = "It's a draw"
          this.modalMessage = tieMessage
          this.showModal()
        }
        break

      case 'total stars':
        if (this.user1["total-stars"] > this.user2["total-stars"]) {
          this.winner = this.user1.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user2["total-stars"] > this.user1["total-stars"]) {
           this.winner = this.user2.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user1["total-stars"] === this.user2["total-stars"]) {
          this.modalTitle = "It's a draw"
          this.modalMessage = tieMessage
          this.showModal()
        }
        break

      case 'highest starred':
        if (this.user1["highest-starred"] > this.user2["highest-starred"]) {
          this.winner = this.user1.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user2["highest-starred"] > this.user1["highest-starred"]) {
          this.winner = this.user2.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user1["highest-starred"] === this.user2["highest-starred"]) {
          this.modalTitle = "It's a draw"
          this.modalMessage = tieMessage
          this.showModal()
        }
        break

      case 'perfect repos':
        if (this.user1["perfect-repos"] > this.user2["perfect-repos"]) {
          this.winner = this.user1.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user2["perfect-repos"] > this.user1["perfect-repos"]) {
          this.winner = this.user2.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user1["perfect-repos"] === this.user2["perfect-repos"]) {
          this.modalTitle = "It's a draw"
          this.modalMessage = tieMessage
          this.showModal()
        }
        break

      case 'following':
        if (this.user1.following > this.user2.following) {
          this.winner = this.user1.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user2.following > this.user1.following) {
          this.winner = this.user2.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user1.following === this.user2.following) {
          this.modalTitle = "It's a draw"
          this.modalMessage = tieMessage
          this.showModal()
        }
        break

      case 'followers':
        if (this.user1.followers > this.user2.followers) {
          this.winner = this.user1.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user2.followers > this.user1.followers) {
          this.winner = this.user2.name
          this.modalTitle = 'Winner winner, Chicken dinner!!'
          this.modalMessage = this.winner + winMessage
          this.showModal()
        }

        if (this.user1.followers === this.user2.followers) {
          this.modalTitle = "It's a draw"
          this.modalMessage = tieMessage
          this.showModal()
        }
        break

      default:
        break
    }
  }
}
