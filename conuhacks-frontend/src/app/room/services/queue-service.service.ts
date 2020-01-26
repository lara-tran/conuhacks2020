import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Song } from '../song';

@Injectable({
  providedIn: 'root'
})
export class QueueServiceService {
  url ="http://localhost:3000/queue";

  constructor(private http: HttpClient) { }

  addSong(song: Song){
    return this.http.post<Song>(this.url,song);
  }

  getSongs(){
    return this.http.get<Array<Song>>(this.url+'/partyhub');
  }
  removeSong(song: Song){
    return this.http.delete(this.url);

  }

}
