import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { PostsComponent } from './module/posts/posts.component';
import { EventsComponent } from './module/events/events.component';
import { RidesComponent } from './module/rides/rides.component';
import { R3Component } from './shared/components/r3/r3.component';

const routes: Routes =
  [
    {
      path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },

    {
      path: '', component: DefaultComponent,
      children:
        [
          {
            path: 'dashboard', component: DashboardComponent
          },
          {
            path: 'posts', component: PostsComponent
          },
          {
            path: 'events', component: EventsComponent,
            children:[
              {
                path:'model/:id', component: R3Component
              }
            ]
          },
          {
            path: 'rides', component: RidesComponent
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
