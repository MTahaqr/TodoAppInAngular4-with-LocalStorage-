import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:[string]=JSON.parse(localStorage.getItem("1"));;
  itemsL =  JSON.parse(localStorage.getItem("1"));
  newItems: string = "" ;
  
  AddItems():void {
    if(this.newItems== "" )
    {
      alert("Please Enter A Todo");
    }
    else{
      this.items.push(this.newItems);
      this.newItems= "";
      localStorage.setItem("1",JSON.stringify(this.items));
      this.itemsL =  JSON.parse(localStorage.getItem("1"));
     
    }
  }
  

  removeItem(index):void{
    this.items.splice(index,1);
      localStorage.setItem("1",JSON.stringify(this.items));
      this.itemsL =  JSON.parse(localStorage.getItem("1"));
      
    
  }

  deleteAll():void{
    this.items.length=0;
      localStorage.setItem("1",JSON.stringify(this.items));
      this.itemsL =  JSON.parse(localStorage.getItem("1"));
      
    
  }

}
