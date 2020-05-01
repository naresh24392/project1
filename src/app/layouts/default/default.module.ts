import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/module/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, 
         MatListModule, MatTableModule, MatPaginatorModule } from '@angular/material';

import { PostsComponent } from 'src/app/module/posts/posts.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { EventsComponent } from 'src/app/module/events/events.component';
import { RidesComponent } from 'src/app/module/rides/rides.component';
import { RidersService } from 'src/app/riders.service';
import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostsComponent,
    EventsComponent,
    RidesComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    RidersService
  ]
})
export class DefaultModule { }
