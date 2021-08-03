import { ServerErrorComponent } from './errors/server-error/server-error/server-error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { RegisterComponent } from './register/register.component';
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
  { path: 'errorHandling', component: TestErrorsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path:'server-error', component:ServerErrorComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
