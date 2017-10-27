import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//component
import { ProfileimageComponent } from './profileimage/profileimage.component';
import { BodyComponent } from './body/body.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyspecialtiesComponent } from './myspecialties/myspecialties.component';
import { SkillsandabilitiesComponent } from './skillsandabilities/skillsandabilities.component';
import { ProjectsComponent } from './projects/projects.component';

//directives
import { NgNotificationDirective } from './directives/ng-notification/ng-notification.directive';

//libraries
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { PushNotificationComponent } from 'ng2-notifications/ng2-notifications';
import { ParticlesModule } from 'angular-particle';
//angular-material
import {
  MdButtonModule,
  MdCardModule,
  MdTabsModule,
  MdSliderModule,
  MdProgressBarModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AboutmeComponent,
    MyspecialtiesComponent,
    SkillsandabilitiesComponent,
    ProfileimageComponent,
    ProjectsComponent,
    NgNotificationDirective,
    PushNotificationComponent
    
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdTabsModule,
    MdSliderModule,
    MdProgressBarModule,
    ParticlesModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
