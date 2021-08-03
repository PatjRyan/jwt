import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: any ;
  constructor( private user: UserService) { }

  ngOnInit(): void {
    this.user.getUsers().subscribe(response => {
      console.log(response);
      this.users = response;
    });
  }

}
