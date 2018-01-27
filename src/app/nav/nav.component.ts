import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
UserForm =new FormGroup({
  name:new FormControl(),
  email:new FormControl(),
  address:new FormGroup({
    
  })
});
}
