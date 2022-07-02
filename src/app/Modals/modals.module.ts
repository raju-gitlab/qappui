import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ModalsModule { }
