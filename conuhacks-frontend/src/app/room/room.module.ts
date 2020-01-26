import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { CircleComponent } from './circle/circle.component';
import {MatCardModule, MatButtonModule, MatRippleModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { SessionModule } from '../session/session.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RoomComponent, CircleComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    SessionModule,
    HttpClientModule
  ],
  exports: [CircleComponent]
})
export class RoomModule { }
