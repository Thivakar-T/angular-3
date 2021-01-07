import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private _baseUrl = 'https://5fd6ee409dd0db0017ee8a2e.mockapi.io/teacher/';
  private _teachers = this._baseUrl ;

  constructor(private http : HttpClient) { }
    
  addStudent(data :any){
  return this.http.post<any>(this._teachers,data);
  }

  getAllStudents(){
    return this.http.get<any>(this._teachers);
    }
    getOneData(id :any){
      return this.http.get<any>(this._teachers + '/' + id );
    }   
    editOneData(id :any,data:any){
      return this.http.put<any>(this._teachers + '/' + id,data);
    }

    removeOneData(id:any){
      return this.http.delete<any>(this._teachers + '/' + id);
    }

}
