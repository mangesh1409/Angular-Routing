import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';

  constructor(private router: Router){ }

  student(){
    this.router.navigate(['/student']);
  }

  studentDetails(){
    this.router.navigate(['/studentdetails']);
  }
}
