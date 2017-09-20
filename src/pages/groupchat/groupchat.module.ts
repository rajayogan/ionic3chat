import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupchatPage } from './groupchat';

@NgModule({
  declarations: [
    GroupchatPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupchatPage),
  ],
  exports: [
    GroupchatPage
  ]
})
export class GroupchatPageModule {}
