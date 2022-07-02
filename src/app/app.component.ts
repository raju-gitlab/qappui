import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { DataserviceService } from './dataservice.service';
import { LoginDialougeComponent } from './login-dialouge/login-dialouge.component';
import { CreatePostComponent } from './Modals/create-post/create-post.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'qappui';
  constructor(private dialog: MatDialog){}
  active = 1;

  openDialog() {
    const dialogRef = this.dialog.open(LoginDialougeComponent);
  }
  createpost()
  {
    const dialogRef = this.dialog.open(CreatePostComponent);
  }
  funccall(data : any)
  {
    window.alert(data);
  }
  tiles: Tile[] = [
    // {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Four', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 6, color: '#DDBDF1'},
  ];

}
