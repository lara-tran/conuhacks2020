import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionRoutingModule } from './session-routing.module';
import { CreateSessionComponent } from './pages/create-session/create-session.component';
import { JoinSessionComponent } from './pages/join-session/join-session.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [CreateSessionComponent, JoinSessionComponent],
  imports: [
    CommonModule,
    SessionRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SessionModule { }
