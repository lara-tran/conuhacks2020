import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  songList = [['../../assets/exit.svg', 'Song','Finn'],['../../assets/exit.svg', 'adng','adnn']];

  constructor() { }

  ngOnInit() {
  }

}
