import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  isCollege = false;
  title = 'college';
  constructor(private router:Router, private route:ActivatedRoute) {

  }
  ngOnInit() {
  this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event);
        if(event.url=="/dashboard"){
          this.isCollege = true;
        }else if (event.url=="/student"){
          this.isCollege = true;
        }else if (event.url=="/studentlist"){
          this.isCollege = true;
        }else if (event.url=="/teacher"){
          this.isCollege = true;
        }else if (event.url=="/teacherlist"){
          this.isCollege = true;
        }
        else{
          this.isCollege = false;
        }
      }
    });
}
}
