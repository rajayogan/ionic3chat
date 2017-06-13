import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasswordresetPage } from './passwordreset';

@NgModule({
  declarations: [
    PasswordresetPage,
  ],
  imports: [
    IonicPageModule.forChild(PasswordresetPage),
  ],
  exports: [
    PasswordresetPage
  ]
})
export class PasswordresetPageModule {}
