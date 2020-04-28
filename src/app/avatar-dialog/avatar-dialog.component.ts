import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../shared/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.scss']
})
export class AvatarDialogComponent implements OnInit {

  avatars: Array<any> = new Array<any>();

  constructor(
    public dialogRef: MatDialogRef<AvatarDialogComponent>,
    public firebaseService: EmployeeService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.firebaseService.getAvatars()
    .subscribe(data => 
      this.avatars = data
      );
      //console.log(this.avatars);
  }

  close(avatar){
    this.dialogRef.close(avatar);
  }

}