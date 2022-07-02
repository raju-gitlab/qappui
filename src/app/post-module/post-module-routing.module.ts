import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from '../test/test.component';
import { PostshomeComponent } from './postshome/postshome.component';

const routes: Routes = [
  {path:"test", component:TestComponent},
  {path:"", component:PostshomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostModuleRoutingModule { }