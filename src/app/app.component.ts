import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='WorkRoam';

  personForm
 

  userInfo=[]
  saved=false;

  name:string="";
  surname:string="";
  age:string="";
  email:string="";
  cellno:string="";
// create a public constructor for form builder 
   constructor(public formBuilder:FormBuilder)
     {
             this.personForm= formBuilder.group(
          {
               name : ["",Validators.pattern('[a-zA-Z]*')],
               surname : ["",Validators.pattern('[a-zA-Z]*')],
               age : ["",Validators.pattern('[0-9]*')],
               email : ["",Validators.email],
               cellno : ["",Validators.pattern('[0-9]*')]
 
          });

          //main 
       
     }


   addUser()
   {

     this.userInfo.push({name:this.name,surname:this.surname,age:this.age,email:this.email,cellno:this.cellno})
      this.saved=true;
      this.name=null;
      this.surname=null;
      this.age=null;
      this.email=null;
      this.cellno=null;
   }
   
}
