import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilepicPage } from './profilepic';

@NgModule({
  declarations: [
    ProfilepicPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilepicPage),
  ],
  exports: [
    ProfilepicPage
  ]
})
export class ProfilepicPageModule {}
