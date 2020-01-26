import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  { path: 'room', component: RoomComponent },
  {path:'search', component: SearchComponent}
];

@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
