import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewgroupPage } from './newgroup';

@NgModule({
  declarations: [
    NewgroupPage,
  ],
  imports: [
    IonicPageModule.forChild(NewgroupPage),
  ],
  exports: [
    NewgroupPage
  ]
})
export class NewgroupPageModule {}
