import { EventEmitter } from "@angular/core"

export class UserService
{
users=[
{name:'Megha',job:'Student',gender:'Female',country:'India',age:20},
{name:'Priya',job:'Emplyee',gender:'Female',country:'India',age:30},
{name:'Omkar',job:'Student',gender:'Male',country:'USA',age:22},
{name:'Pratidnya',job:'Student',gender:'Female',country:'India',age:25},
{name:'Prashant',job:'Developer',gender:'Male',country:'India',age:22},
{name:'Roshani',job:'Fashion Designer',gender:'Female',country:'Shrilanka',age:25}
]


// 'create an custom event will emit the object with this paaramaenetr'
onShowDetailsClicked=new EventEmitter<{name:string,job:string,gender:string,country:string,age:number}>();

showUserDetails(user:{name:string,job:string,gender:string,country:string,age:number})
{
this.onShowDetailsClicked.emit(user)
}



}
