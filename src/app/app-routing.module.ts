import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentRegComponent } from './student-reg/student-reg.component';


const routes: Routes = [
  // {
  //   path: '', component: StudentComponent              // Dont add path in URL
  // },
  // {
  //   path: '', redirectTo: 'student', pathMatch: 'full'    // add path in URL
  // },

  {
    path: 'student',
    children : [
      {  path: '', component: StudentComponent  },           // Dont add path in URL
      {  path: 'studentregistration', component: StudentRegComponent  },
      {  path: 'studentdetails', component: StudentDetailsComponent   }
    ]
  },

  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
