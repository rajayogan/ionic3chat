import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupbuddiesPage } from './groupbuddies';

@NgModule({
  declarations: [
    GroupbuddiesPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupbuddiesPage),
  ],
  exports: [
    GroupbuddiesPage
  ]
})
export class GroupbuddiesPageModule {}
