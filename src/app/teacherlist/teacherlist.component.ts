import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {
  teacherArr: any = [];
  id : any;
  constructor(
    private _teacherService : TeacherService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._teacherService.getAllStudents().subscribe(res => {
      this.teacherArr = res;
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
   
    this._teacherService.removeOneData(this.id).subscribe(res => {
    
      this.router.navigateByUrl('/empty', { skipLocationChange: true });
      setTimeout(() => this.router.navigate(['/teacherlist']), 0);

    })
  }
}
