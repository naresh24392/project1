import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { PostsComponent } from './module/posts/posts.component';
import { EventsComponent } from './module/events/events.component';
import { RidesComponent } from './module/rides/rides.component';
import { R3Component } from './shared/components/r3/r3.component';
import { R15Component } from './shared/components/r15/r15.component';
import { Mt15Component } from './shared/components/mt15/mt15.component';
import { Fz25Component } from './shared/components/fz25/fz25.component';
import { FzComponent } from './shared/components/fz/fz.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes =
  [
    {
      path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },

    {
      path: '', component: DefaultComponent,
      children:
        [{
          path: 'dashboard', component: DashboardComponent
        },
        {
          path: 'posts', component: PostsComponent
        }, {
          path: 'events', component: EventsComponent
        }, {
          path: 'rides', component: RidesComponent
        },
        {
          path: 'R3', component: R3Component
        },
        {
          path: 'R15', component: R15Component
        },
        {
          path: 'MT15', component: Mt15Component
        },
        {
          path: 'FZ25', component: Fz25Component
        },
        {
          path: 'FZ', component: FzComponent
        }
        ]
    },
    {
      path: "**", component: PageNotFoundComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
