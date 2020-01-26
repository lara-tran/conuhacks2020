import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  headers = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: window.localStorage.getItem("access_token")
  });

  searchUrl = "https://api.spotify.com/v1/search";
  playUrl = "https://api.spotify.com/v1/me/player/play";
  pauseUrl= "https://api.spotify.com/v1/me/player/pause";
  infoUrl ="https://api.spotify.com/v1/me/player";
  nextUrl ="https://api.spotify.com/v1/me/player/next";
  previousUrl ="https://api.spotify.com/v1/me/player/previous";
  currentUrl ="https://api.spotify.com/v1/me/player/currently-playing";


  constructor(private httpClient: HttpClient) {}

  searchSong(name: string,artist: string = null,  type = 'track') {

    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + window.localStorage.getItem('access_token')
    });


    var params = new HttpParams();

    if(artist){
      params = params.set("q", 'name:'+ name +'+artist:' + artist);
    }else{
      params = params.set("q", 'name:'+ name);

    }
    params = params.set("type", type);

    return this.httpClient.get<any>(this.searchUrl, { headers, params });
  }
  playSong(uri: string = null){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + window.localStorage.getItem('access_token')
    });
    var params = new HttpParams();
    if(uri){
      return this.httpClient.put(this.playUrl,{uris:[uri]}, {headers, params});

    } else{
      return this.httpClient.put(this.playUrl,{}, {headers, params});
    }


  }
  pauseSong(){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + window.localStorage.getItem('access_token')
    });
    var params = new HttpParams();

    return this.httpClient.put(this.pauseUrl,{}, {headers, params});
  }
  getInfo(){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + window.localStorage.getItem('access_token')
    });
    var params = new HttpParams();
    return this.httpClient.get<any>(this.infoUrl, {headers, params});

  }

  nextSong(){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + window.localStorage.getItem('access_token')
    });
    var params = new HttpParams();

    return this.httpClient.post(this.nextUrl,{}, {headers, params});
  }
  previousSong(){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + window.localStorage.getItem('access_token')
    });
    var params = new HttpParams();

    return this.httpClient.post(this.previousUrl,{}, {headers, params});
  }

  currentSong(){
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": 'Bearer ' + window.localStorage.getItem('access_token')
    });
    var params = new HttpParams();
    return this.httpClient.get<any>(this.currentUrl, {headers, params});
  }
}
