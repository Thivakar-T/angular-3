import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'studentlist', component: StudentlistComponent },
  { path: 'studentlist/:id', component: StudentlistComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'teacher/:id', component: TeacherComponent },
  { path: 'teacherlist', component: TeacherlistComponent },
  { path: 'teacherlist/:id', component: TeacherlistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'empty', component: EmptyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
