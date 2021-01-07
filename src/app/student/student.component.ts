import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any = {};
  id: any;
  constructor(
    private _StudentService: StudentService,
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
    this._StudentService.getOneData(this.id).subscribe(res => {
    console.log(res);
    this.students = res;
  })
  }
  submit() {
    
    if (this.id) {
      this._StudentService.editOneData(this.id, this.students).subscribe(res => {
        this.router.navigateByUrl('/studentlist');
      })
    }
  else{
    this._StudentService.addStudent(this.students).subscribe(res => {
    this.router.navigateByUrl('/studentlist');
   
     }, err => {
      console.log(err);
    });
  }
}

}
