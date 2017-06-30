import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// remember to import components
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from "app/registration/registration.component";
import { ThankyouComponent } from "app/thankyou/thankyou.component";
import { EditComponent } from "app/edit/edit.component";
import { CurriculumComponent } from "app/curriculum/curriculum.component";
import { ResourcesComponent } from "app/resources/resources.component";
import { TestimonialsComponent } from "app/testimonials/testimonials.component";
import { AboutComponent } from "app/about/about.component";
import { ContactComponent } from "app/contact/contact.component";


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'thankyou', component: ThankyouComponent },
    { path: 'edit', component: EditComponent },
    { path: 'curriculum', component: CurriculumComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: ''},
  // { path: 'notes/private', component: NotesPrivateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
