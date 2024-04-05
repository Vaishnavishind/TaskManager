import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent
 {
  baseurl='http://localhost:9091/';
  details:String="";
  userid:number=0;
  http: any;
  addTask()
  {
           let url=this.baseurl+'add'+this.userid;
           this.http.post(url,this.details).subscribe((data:any)=>
           {
              console.log(data);
                this.tasks.push(data);
           });
           this.details="";
           
  }
  tasks:any;
  readAllTask()
  {
    
       let url=this.baseurl+'readAllTask'+this.userid;
       this.http.get(url).subscribe((data:any)=>
       {
            this.tasks=data;
       });
  }
  
  delete(id:any): void
   {
    let url=this.baseurl+'delete'+id;
    this.http.post(url).subscribe((result:any)=>
     {
      this.readAllTask();
      if (result) 
      {
        alert('Task deleted successfully');
      }
       else 
      {
        alert('Failed to delete task');
      }
    });
  }

 
 
  
}




