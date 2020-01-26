import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionRoutingModule } from './session-routing.module';
import { CreateSessionComponent } from './pages/create-session/create-session.component';
import { JoinSessionComponent } from './pages/join-session/join-session.component';



@NgModule({
  declarations: [CreateSessionComponent, JoinSessionComponent],
  imports: [
    CommonModule,
    SessionRoutingModule
  ]
})
export class SessionModule { }
