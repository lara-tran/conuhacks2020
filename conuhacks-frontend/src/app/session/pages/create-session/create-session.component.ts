import { Component, OnInit } from '@angular/core';
import { Session } from '../../models/session';
import { SessionHttpClientService } from '../../services/session-http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  hostName: string;
  sessionName: string;
  constructor(private sessionService: SessionHttpClientService, private router: Router) { }

  ngOnInit() {
  }
  submitForm(){
    console.log(this.sessionName, this.hostName);
    const session: Session ={
      hostName: this.hostName,
      sessionName: this.sessionName,
      guests : []
    };
    this.sessionService.createSession(session).subscribe(() => {
      this.router.navigate([`/room/${this.sessionName}`]);
    });

  }
}
