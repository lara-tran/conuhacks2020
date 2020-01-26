import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { SessionHttpClientService } from "../session/services/session-http-client.service";
import { Session } from "../session/models/session";
import { SpotifyService } from "./services/spotify.service";
import { Song } from "./song";
import { QueueServiceService } from "./services/queue-service.service";

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
  currentSong: any;

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionHttpClientService,
    private spotifyService: SpotifyService,
    private router: Router,
    private queueService: QueueServiceService
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
    this.spotifyService.currentSong().subscribe(res => {
      console.log(res.item.album.images);
      this.currentSong = {
        artist: res.item.artists[0].name,
        name: res.item.name,
        image: res.item.album.images[1].url
      };
    });
  }

  exit(){
    const myStorage = window.localStorage;
    const name = myStorage.getItem("name");
    this.sessionService.leaveSession(name, 'partyhub').subscribe((res)=>{
      this.router.navigate(['/']);
    })
  }

  search() {
    this.spotifyService.searchSong("hello").subscribe(res => {
      console.log(res);
    });
  }
  fastForward() {
    this.queueService.getSongs().subscribe(res => {
      if (res.length != 0) {
        console.log(res);

        const nextSong = res[0];
        this.spotifyService.playSong(nextSong.uri).subscribe(res => {
          this.queueService.removeSong(nextSong).subscribe(res => {
            setTimeout(() => {
              this.spotifyService.currentSong().subscribe(r => {
                this.currentSong = {
                  artist: r.item.artists[0].name,
                  name: r.item.name,
                  image: r.item.album.images[1].url
                };
              });
            }, 3000);
          });
        });
      } else {
        this.spotifyService.nextSong().subscribe(res => {
          setTimeout(() => {
            this.spotifyService.currentSong().subscribe(r => {
              this.currentSong = {
                artist: r.item.artists[0].name,
                name: r.item.name,
                image: r.item.album.images[1].url
              };
            });
          }, 3000);
        });
      }
    });
  }
  previousTrack() {
    this.spotifyService.previousSong().subscribe(res => {
      setTimeout(() => {
        this.spotifyService.currentSong().subscribe(r => {
          this.currentSong = {
            artist: r.item.artists[0].name,
            name: r.item.name,
            image: r.item.album.images[1].url
          };
        });
      }, 3000);
    });
  }

  openSearch() {
    this.router.navigate(["/search"]);
  }
}
