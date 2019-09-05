import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  @Input() profile: any;

  ngOnInit() {
   
  }
  getFullName(){
    return ` ${this.profile.surname}, ${this.profile.name}`;
  }
  logFullName(){
    console.log(`Logging: ${this.getFullName()}`);
    //https://app.pluralsight.com/player?course=angular-fundamentals&author=jim-cooper&name=angular-fundamentals-m2&clip=7
  }
}
