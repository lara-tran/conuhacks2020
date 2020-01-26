import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent} from './song/song.component';
import { QueueRoutinModule} from './queue-routin.module';
import { QueueComponent } from './queue.component';
import { MatCardModule} from '@angular/material/card';
import {RoomModule} from'../room/room.module'



@NgModule({
  declarations: [QueueComponent, SongComponent],
  imports: [
    CommonModule,
    QueueRoutinModule,
    MatCardModule,
    RoomModule
  ],
  exports: [SongComponent,QueueComponent]
})
export class QueueModule { }
