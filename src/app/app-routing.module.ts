import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: 'auth'}, 
{path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)},
{path: 'projects', canActivate: [authGuard], loadComponent: () => import('./projects/projects.component').then(proj => proj.ProjectsComponent)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
