import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderComponent} from '../header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { PackagesComponent } from './packages/packages.component';
import { FeaturesComponent } from './features/features.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    StartPageComponent,
    PackagesComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
      },
      {
        path: 'start',
        component: StartPageComponent
      },
      {
        path: 'packages',
        component: PackagesComponent
      },
      {
        path: 'features',
        component: FeaturesComponent
      }
    ]),
  ],
  exports: [
  ]
})
export class HomeModule { }
