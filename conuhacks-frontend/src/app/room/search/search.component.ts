import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';
import { QueueServiceService } from '../services/queue-service.service';
import { Song } from '../song';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  searchTerm: string;
  songs: any;
  constructor(private router: Router, private spotifyService: SpotifyService, private queueService: QueueServiceService) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate(['/room']);

  }
  search(){
    this.spotifyService.searchSong(this.searchTerm).subscribe((res)=>{
      this.songs = res.tracks.items.slice(0,10);
    });
  }
  addSong(i: number){
    let song = this.songs[i];
    let newSong:Song = {sessionName: "partyhub", artist:song.artists[0].name, songName: song.name, uri: song.uri};
    this.queueService.addSong(newSong).subscribe((res)=>{

      this.router.navigate(['/room/partyhub']);
    });
  }
}
