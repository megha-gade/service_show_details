import { UserService } from './../services/user.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {

usersAll:{name:string,job:string,gender:string,country:string,age:number}[]=[]

constructor(private userService:UserService)
{

}

ngOnInit()
{
this.usersAll=this.userService.users;
}


showDetails(user:{name:string,job:string,gender:string,country:string,age:number})
{
this.userService.showUserDetails(user);
}


}
