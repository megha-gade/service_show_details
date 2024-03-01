import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detsils',
  templateUrl: './user-detsils.component.html',
  styleUrl: './user-detsils.component.css'
})
export class UserDetsilsComponent {


constructor(private userService:UserService)
{

}

user:any;

ngOnInit()
{
this.userService.onShowDetailsClicked.
subscribe((data:{name:string,job:string,gender:string,country:string,age:number})=>
this.user=data)
}

}
