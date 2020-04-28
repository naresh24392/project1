import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/module/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatListModule, MatTableModule, MatPaginatorModule} from '@angular/material';
import { EventsComponent } from 'src/app/module/events/events.component';
import { RidesComponent } from 'src/app/module/rides/rides.component';
import { RidersService } from 'src/app/riders.service';
import { EventsModule } from 'src/app/module/events/events.module';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    EventsComponent,
    RidesComponent,
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
    MatPaginatorModule,
    EventsModule
    ],
  providers: [
    RidersService
  ]
})
export class DefaultModule { }
