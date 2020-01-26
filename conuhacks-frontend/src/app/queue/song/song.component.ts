import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {

  @Input() inputSong: Object[];
  song: Object[];

  constructor() { }

  ngOnInit() {
    this.song = this.inputSong;
  }

}
