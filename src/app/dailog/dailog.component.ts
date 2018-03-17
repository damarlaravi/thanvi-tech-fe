import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss']
})
export class DailogComponent implements OnInit {
  public title: string;
  public header: string;
  public body: string;
  public primary: string;
  public cancel: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOvervieweComponent, {
      width: '250px',
      data: { title: this.title, header: this.header, 
        body: this.body, primary: this.primary, cancel: this.cancel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.body = result;
    });
  }
}

@Component({
  selector: 'app-dialog-view',
  templateUrl: 'dialog-overview.html',
})
export class DialogOvervieweComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogOvervieweComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
