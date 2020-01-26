import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { CircleComponent } from './circle/circle.component';
import {MatCardModule, MatButtonModule, MatRippleModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { SessionModule } from '../session/session.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { QueueServiceService } from './services/queue-service.service';





@NgModule({
  declarations: [RoomComponent, CircleComponent, SearchComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    SessionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatListModule
  ],
  exports: [CircleComponent],
  providers:[QueueServiceService]
})
export class RoomModule { }
