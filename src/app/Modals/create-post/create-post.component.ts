import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  constructor(private dialog: MatDialog) { }
  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];
  shareTypes: any = [];
  CreatePostForm = new FormGroup({
    PostName: new FormControl('', Validators.required),
    ShareType: new FormControl('', Validators.required)
  });
  getValue(data: any) {
    this.CreatePostForm.patchValue({ ["ShareType"]: data });
  }
  SubmitPost() {
    // this.dataService.post("Question/CreateNewQuestion", this.CreatePostForm.value).subscribe(data => {
    //   console.log(data);
    //   this.shareTypes = data;
    // },
    //   error => {
    //     console.error("API failed to load resources");
    //   });
    // console.log(this.CreatePostForm.value);
  }
  closemodal() {
    const dialogRef = this.dialog.closeAll();
  }
  ngOnInit(): void {
    // this.dataService.Get("Question/GetShareTypes").subscribe(data => {
    //   console.log(data);
    //   this.shareTypes = data;
    // },
    //   error => {
    //     console.error("API failed to load resources");
    //   });
  }
}
