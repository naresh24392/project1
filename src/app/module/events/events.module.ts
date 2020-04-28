import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R3Component } from 'src/app/shared/components/r3/r3.component';
import { R15Component } from 'src/app/shared/components/r15/r15.component';
import { Mt15Component } from 'src/app/shared/components/mt15/mt15.component';
import { Fz25Component } from 'src/app/shared/components/fz25/fz25.component';
import { FzComponent } from 'src/app/shared/components/fz/fz.component';
import { EventsComponent } from './events.component';

const routes: Routes = 
[
  {
    path: '',
    component: EventsComponent,
    children:[
      // {
      //   path: 'R3', component: R3Component,
      // },
      // {
      //   path: 'R15', component: R15Component,
      // },
      // {
      //   path: 'MT15', component: Mt15Component,
      // },
      // {
      //   path: 'FZ25', component: Fz25Component,
      // },
      // {
      //   path: 'FZ', component: FzComponent,
      // }
    ]
  }
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EventsModule { }
