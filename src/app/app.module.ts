import { PostModuleModule } from './post-module/post-module.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { LoginDialougeComponent } from './login-dialouge/login-dialouge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalsModule } from './Modals/modals.module';
import { HomeComponent } from './home/home.component';
import { QuestionCompComponent } from './question-module/question-comp/question-comp.component';
import { CommonModule } from '@angular/common';
import { HttpclientserviceService } from './Services/httpclientservice.service';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { PostCompComponent } from './post-module/post-comp/post-comp.component';
import { PostshomeComponent } from './post-module/postshome/postshome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginDialougeComponent,
    HomeComponent,
    QuestionCompComponent,
    TestComponent,
    PostCompComponent,
    PostshomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ModalsModule,
    HttpClientModule,
    PostModuleModule
  ],
  providers: [HttpclientserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
