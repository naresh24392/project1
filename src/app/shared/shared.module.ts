import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatButtonModule, MatToolbarModule, 
         MatIconModule, MatCardModule, MatListModule, MatMenuModule, MatGridListModule} from '@angular/material';
import { R3Component } from './components/r3/r3.component';
import { R15Component } from './components/r15/r15.component';
import { Mt15Component } from './components/mt15/mt15.component';
import { Fz25Component } from './components/fz25/fz25.component';
import { FzComponent } from './components/fz/fz.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    R3Component,
    R15Component,
    Mt15Component,
    Fz25Component,
    FzComponent,
    ],
  imports: [
    CommonModule, 
    MatDividerModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatListModule, 
    MatMenuModule,
    RouterModule,
    MatGridListModule  ]
})
export class SharedModule { }
