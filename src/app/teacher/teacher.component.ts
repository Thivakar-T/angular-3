import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teachers: any = {};
  id: any;
  constructor(
    private _TeacherService: TeacherService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.getOneProfile();
    }
  }
  getOneProfile() {
    this.id;
    this._TeacherService.getOneData(this.id).subscribe(res => {
    console.log(res);
    this.teachers = res;
  })
  }
  submit() {
    
    if (this.id) {
      this._TeacherService.editOneData(this.id, this.teachers).subscribe(res => {
        this.router.navigateByUrl('/teacherlist');
      })
    }
  else{
    this._TeacherService.addStudent(this.teachers).subscribe(res => {
    this.router.navigateByUrl('/teacherlist');
   
     }, err => {
      console.log(err);
    });
  }
}

}
