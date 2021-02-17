import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css']
})
export class RegisterViewComponent implements OnInit {

  public usersList : Array<any>=[];
  constructor(private userservice : UserService) { 
    this.userservice.getUsers().subscribe((users : any)=>{
      console.log(users);
      this.usersList = users;
    });
  }

  ngOnInit(): void {
  }

}
