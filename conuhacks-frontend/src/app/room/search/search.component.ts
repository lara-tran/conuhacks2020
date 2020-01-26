import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Song{
  //art: string,
  name: string,
  artist: string
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  searchTerm: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate(['/room']);

  }
  search(){
    console.log("searched a song");
    let songs: Song[] = [
      {
        name: 'a',
        artist: 'b',
      },
      {
        name: 'adfaf',
        artist: 'b',
      }
    ];
    return songs;
  }
  addSong(){
    this.router.navigate(['/room']);
  }
}
