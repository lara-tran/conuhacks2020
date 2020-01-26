import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SessionHttpClientService } from '../session/services/session-http-client.service';
import { Session } from '../session/models/session';

@Component({
  selector: "app-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.scss"]
})
export class RoomComponent implements OnInit {
  guestList = ["Finn", "Lara", "Zohal", "Loujain"];
  iconName: string;
  sessionName: string;
  session: Session;

  constructor(private route: ActivatedRoute, private sessionService: SessionHttpClientService) {
    this.iconName = "play_circle_filled";
  }

  toggle() {
    if (this.iconName == "play_circle_filled") {
      this.iconName = "pause_circle_filled";
    } else {
      this.iconName = "play_circle_filled";
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionName = params['sessionName'];
      this.sessionService.getSession(this.sessionName).subscribe((res) => {
        this.session = res;
      });
    });

  }
}
