import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherSamplePageComponent } from './another-sample-page/another-sample-page.component';
import { RegisterComponent } from './register/register.component';
import { SamplePageComponent } from './sample-page/sample-page.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate:[AuthGuard],
    children: [
      { path: 'users', component: AllUsersComponent },
      { path: 'users/:id', component: UserDetailsComponent},
    ]
  },
  { path: 'samplePage', component: SamplePageComponent}, 
  { path: 'anotherSamplePage', component: AnotherSamplePageComponent},
  { path: '**', component: RegisterComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
