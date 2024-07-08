import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { FileDataManagerComponent } from './modules/file-data-manager/file-data-manager.component';
import { UserSetUpComponent } from './modules/user-set-up/user-set-up.component';
import { AuditTrailComponent } from './modules/audit-trail/audit-trail.component';
import { MyProfileComponent } from './modules/my-profile/my-profile.component';
import { PortalSettingsComponent } from './modules/portal-settings/portal-settings.component';
import { AdminReportsComponent } from './modules/admin-reports/admin-reports.component';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'file-data-manager', pathMatch: 'full' },
      { path: 'file-data-manager', component: FileDataManagerComponent, children: [
          // { path: 'item1', component: YourItem1Component }
        ]
      },
      { path: 'user-setup', component: UserSetUpComponent, children: [
          // { path: 'item1', component: YourItem1Component }
        ]
      },
      { path: 'audit-trail', component: AuditTrailComponent, children: [
          // { path: 'activity-log', component: YourActivityLogComponent },
          // { path: 'change-log', component: YourChangeLogComponent }
        ]
      },
      { path: 'my-profile', component: MyProfileComponent, children: [
          // { path: 'item1', component: YourItem1Component }
        ]
      },
      { path: 'portal-settings', component: PortalSettingsComponent, children: [
          // { path: 'item1', component: YourItem1Component }
        ]
      },
      { path: 'admin-reports', component: AdminReportsComponent, children: [
          // { path: 'item1', component: YourItem1Component }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
