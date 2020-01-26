import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSessionComponent } from './pages/create-session/create-session.component';
import { JoinSessionComponent } from './pages/join-session/join-session.component';


const routes: Routes = [
{path:'create-session', component:CreateSessionComponent},
{path: 'join-session', component:JoinSessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
