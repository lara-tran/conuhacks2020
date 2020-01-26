import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent} from './song/song.component';
import { QueueRoutinModule} from './queue-routin.module';
import { QueueComponent } from './queue.component';
import { MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [QueueComponent, SongComponent],
  imports: [
    CommonModule,
    QueueRoutinModule,
    MatCardModule,
  ],
  exports: [SongComponent,QueueComponent]
})
export class QueueModule { }
