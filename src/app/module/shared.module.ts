import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule, MatButtonModule, MatToolbarModule, 
         MatIconModule, MatCardModule, MatListModule, MatMenuModule, MatGridListModule} from '@angular/material';
import { R3Component } from '../shared/components/r3/r3.component';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    R3Component
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
    MatGridListModule,
    ChartsModule
    ]
})
export class SharedModule { }
