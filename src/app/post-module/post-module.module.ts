import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModuleRoutingModule } from './post-module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpclientserviceService } from '../Services/httpclientservice.service';


@NgModule({
  declarations: [
    // PostshomeComponent
  ],
  imports: [
    CommonModule,
    PostModuleRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [HttpclientserviceService]
})
export class PostModuleModule { }
