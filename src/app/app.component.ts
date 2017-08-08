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
  i:number=0;
  
  AddItems():void {
    if(this.newItems== "" )
    {
      alert("Please Enter A Todo");
    }
    else{
      this.items.push(this.newItems);
      this.newItems= "";
      // var abcd = ["one","two","three"];
      // localStorage.setItem("1","one");
      localStorage.setItem("1",JSON.stringify(this.items));
      this.itemsL =  JSON.parse(localStorage.getItem("1"));
      // var itemsL = localStorage.getItem("1");
      // console.log("this.items",this.items);      
      // console.log(this.itemsL);
      
      // var abc= localStorage.getItem("1");
      // console.log(abc);
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
  complete(ind):string{
    // console.log("fff");
    this.i++;
    if (this.i%2!=0)
    {
    console.log(this.i);
    return ind;
    }
    else{
      return null;
    }
  }

}
