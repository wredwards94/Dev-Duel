import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import EmptyUser from "../model/EmptyUser";
// import * as bootstrap from '/bootstrap';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = "";
  errorMessage: string = '';
  modalTitle: string = '';
  isUserVisible: boolean = false;
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

  constructor(private userService: UserService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService.inspectUser(this.username)
    .then(data => {
      this.userData = data as EmptyUser;
      this.isUserVisible = true;
    })
    .catch(error => {
      this.isUserVisible = false;
      if(this.username === '') {
        this.modalTitle = 'Username empty';
        this.errorMessage = 'Username cannot be empty. Please enter a valid username.';
        this.showModal();
      }else {
        this.modalTitle = 'User not found';
        this.errorMessage = "This user does not exist. Please enter a valid username.";
        this.showModal();
      }
    });
  }

  showModal() {
    const modal = document.getElementById('staticBackdrop');
    if (modal) {
      const bsModal = new bootstrap.Modal(modal);
      bsModal.show();
    }
  }
}
