import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProfileimageComponent } from './profileimage/profileimage.component';
import { BodyComponent } from './body/body.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyspecialtiesComponent } from './myspecialties/myspecialties.component';
import { SkillsandabilitiesComponent } from './skillsandabilities/skillsandabilities.component';
import { ProjectsComponent } from './projects/projects.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdSliderModule } from '@angular/material';
import { MdProgressBarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    AboutmeComponent,
    MyspecialtiesComponent,
    SkillsandabilitiesComponent,
    ProfileimageComponent,
    ProjectsComponent,
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
