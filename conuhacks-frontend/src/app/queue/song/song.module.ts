import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {SongComponent} from './song.component';



@NgModule({
  declarations: [SongComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
})
export class SongModule { }
