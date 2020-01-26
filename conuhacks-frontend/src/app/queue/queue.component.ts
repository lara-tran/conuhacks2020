import { Component, OnInit } from '@angular/core';
import { QueueServiceService } from '../room/services/queue-service.service';


@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  // songList = [['../../assets/exit.svg', 'Song','Finn'],['../../assets/exit.svg', 'adng','adnn']];

  songList: Array<any>;
  constructor(private queueService: QueueServiceService) { }

  ngOnInit() {
    this.queueService.getSongs().subscribe(res => this.songList = res);
  }

}
