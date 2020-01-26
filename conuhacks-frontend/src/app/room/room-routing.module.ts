import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RoomComponent } from './room.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  { path: 'room/:sessionName', component: RoomComponent },
  {path:'search', component: SearchComponent},{
    path: 'test',
    component: RoomComponent,
    resolve: {
        url: 'externalUrlRedirectResolver'
    },
    data: {
        externalUrl: 'http://localhost:3000/login'
    }
  }

];

@NgModule({
  imports: [  RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    {
        provide: 'externalUrlRedirectResolver',
        useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        {
            window.location.href = (route.data as any).externalUrl;
        }
    }
]
})
export class RoomRoutingModule { }
