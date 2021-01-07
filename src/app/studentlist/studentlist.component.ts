import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  studentArr: any = [];
  id : any;
  constructor(
    private _StudentService : StudentService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._StudentService.getAllStudents().subscribe(res => {
      this.studentArr = res;
    }, err => {
      console.log(err);
    });
  }
  get(id:any) {
    this.id = id;
    this.deleteOneProfile();

  }
  deleteOneProfile() {
    this.id;
   
    this._StudentService.removeOneData(this.id).subscribe(res => {
    
      this.router.navigateByUrl('/empty', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['/studentlist']), 0);

    })
  } 

}
