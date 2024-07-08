import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { FileDataManagerComponent } from './modules/file-data-manager/file-data-manager.component';
import { UserSetUpComponent } from './modules/user-set-up/user-set-up.component';
import { AuditTrailComponent } from './modules/audit-trail/audit-trail.component';
import { MyProfileComponent } from './modules/my-profile/my-profile.component';
import { PortalSettingsComponent } from './modules/portal-settings/portal-settings.component';
import { AdminReportsComponent } from './modules/admin-reports/admin-reports.component';
import { TableUtilsComponent } from './utils/table-utils/table-utils.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainLayoutComponent,
    FileDataManagerComponent,
    UserSetUpComponent,
    AuditTrailComponent,
    MyProfileComponent,
    PortalSettingsComponent,
    AdminReportsComponent,
    TableUtilsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
