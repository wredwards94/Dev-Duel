import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = ""
  userData: any
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
      this.userData = data
      this.isUserVisible = true
    })
    .catch(error => {
      this.isUserVisible = false
      this.errorMessage = "this user was not found "
    });
  }
}
