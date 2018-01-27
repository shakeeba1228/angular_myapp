import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public contacts= [
    {firstName:"Shakeeba", lastName:'Sami', phone:'0123456789', email:'ss@gmail.com'},
    {firstName:"suganya", lastName:'vs', phone:'213454', email:'ssv@gmail.com'},
    {firstName:"sahana", lastName:'sindhe', phone:'54545', email:'ssindhe@gmail.com'},
    {firstName:"trisha", lastName:'kumari', phone:'87944444', email:'tk@gmail.com'},
  ];
  public selectedContact={};

  onSelect(contact){
this.selectedContact= contact;
  }
}
