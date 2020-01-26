import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SessionHttpClientService } from "../session/services/session-http-client.service";
import { Session } from "../session/models/session";
import { SpotifyService } from "./services/spotify.service";

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

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionHttpClientService,
    private spotifyService: SpotifyService,private router: Router
  ) {
    this.iconName = "play_circle_filled";
  }
 

  toggle() {
    if (this.iconName == "play_circle_filled") {
      this.iconName = "pause_circle_filled";
      this.spotifyService.playSong().subscribe(res => {
        console.log(res);
      });
    } else {
      this.iconName = "play_circle_filled";
      this.spotifyService.pauseSong().subscribe(res => {
        console.log(res);
      });
    }

    // this.spotifyService.getInfo().subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionName = params["sessionName"];
      this.sessionService.getSession(this.sessionName).subscribe(res => {
        this.session = res;
      });
      this.route.queryParams.subscribe(params => {
        const myStorage = window.localStorage;
        const access_token = params["access_token"];
        const refresh_token = params["refresh_token"];
  
        myStorage.setItem("access_token", access_token);
      });
    });
  }

  search() {
    this.spotifyService.searchSong("hello").subscribe(res => {
      console.log(res);
    });
  }
  fastForward() {
    this.spotifyService.nextSong().subscribe(res => {
      console.log(res);
    });
  }
  previousTrack() {
    this.spotifyService.previousSong().subscribe(res => {
      console.log(res);
    });
  }

  openSearch(){
    this.router.navigate(['/search']);
  }
}
