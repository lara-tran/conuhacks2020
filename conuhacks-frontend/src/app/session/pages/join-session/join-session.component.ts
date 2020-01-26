import { Component, OnInit } from '@angular/core';
import { SessionHttpClientService } from '../../services/session-http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-session',
  templateUrl: './join-session.component.html',
  styleUrls: ['./join-session.component.scss']
})
export class JoinSessionComponent implements OnInit {

  guestName: string;
  sessionName: string;
  constructor(private sessionService: SessionHttpClientService, private router: Router) { }

  ngOnInit() {
  }
  submitForm(){

    this.sessionService.joinSession(this.guestName, this.sessionName).subscribe(() => {
      this.router.navigate([`/room/${this.sessionName}`]);
    });
  }

}
