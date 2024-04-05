import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{

  http:any;
  taskService: any;
  tasks: never[] | undefined;
constructor (http : HttpClient)
{
    this.http=http;
}
baseurl='http://localhost:9091/';

username:String="";
password:String='';
 login()
  {
      let obj=[this.username, this.password];
      let url=this.baseurl+'login';
      this.http.post(url,obj).subscribe((data:any)=>
        {
              if(data==null || data==0)
              {
                window.alert('something is wrong')
              }
              else
              {
                  this.userid=data;
              }
        });
  }
userid:number=0;
  logout()
  {
    this.userid=0;
    this.tasks=[];
  }
}
