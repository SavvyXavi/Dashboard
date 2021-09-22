import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

// Modules
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class DefaultModule { }