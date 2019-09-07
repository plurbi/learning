import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from 'src/app/shared/models/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  @Input() profile: IProfile;

  ngOnInit() {
   
  }
  getFullName(){
    return ` ${this.profile.surname}, ${this.profile.name}`;
  }
  logFullName(){
    console.log(`Logging: ${this.getFullName()}`);    
  }
}
