import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';

import {RoomModule} from './room/room.module';
import {SessionModule } from './session/session.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {QueueComponent} from './queue/queue.component';
import {QueueModule} from './queue/queue.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    RoomModule,
    BrowserAnimationsModule,
    SessionModule,
    QueueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
