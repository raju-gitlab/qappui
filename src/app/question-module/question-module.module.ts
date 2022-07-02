import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionModuleRoutingModule } from './question-module-routing.module';
import { QuestionhomeComponent } from './questionhome/questionhome.component';


@NgModule({
  declarations: [
    QuestionhomeComponent
  ],
  imports: [
    CommonModule,
    QuestionModuleRoutingModule
  ]
})
export class QuestionModuleModule { }
