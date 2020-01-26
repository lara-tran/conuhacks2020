import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { CircleComponent } from './circle/circle.component';
import {MatCardModule, MatButtonModule, MatRippleModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';





@NgModule({
  declarations: [RoomComponent, CircleComponent, SearchComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatListModule
  ],
  exports: [CircleComponent]
})
export class RoomModule { }
