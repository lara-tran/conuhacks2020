import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.scss']
})
export class JoinSessionComponent implements OnInit {

  guestName: string;
  sessionName: string;
  constructor() { }

  ngOnInit() {
  }
  submitForm(){
    console.log(this.sessionName, this.guestName);
    
  }

}
