import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionRoutingModule } from './session-routing.module';
import { CreateSessionComponent } from './pages/create-session/create-session.component';
import { JoinSessionComponent } from './pages/join-session/join-session.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SessionHttpClientService } from './services/session-http-client.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [CreateSessionComponent, JoinSessionComponent],
  imports: [
    CommonModule,
    SessionRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,MatButtonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SessionModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SessionModule,
      providers: [ SessionHttpClientService ]
    };
  }
}
