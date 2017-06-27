import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// remember to import components
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from "app/registration/registration.component";


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: '**', redirectTo: ''},
  // { path: 'notes/private', component: NotesPrivateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
