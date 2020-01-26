import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CircleComponent } from './circle/circle.component';



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})


export class RoomComponent implements OnInit {

  guestList = ['Finn', 'Lara', 'Zohal', 'Loujain'];
  iconName : string;

  constructor() {
    this.iconName= "play_circle_filled"
  }
  
  toggle(){    
    if(this.iconName == 'play_circle_filled'){
    this.iconName= "pause_circle_filled";
    }
    else{
    this.iconName="play_circle_filled";
    }
  }

  viewQueue(){

   // this.router.navigate(['/login']);


  }
   
  ngOnInit(){
    
  }
}
