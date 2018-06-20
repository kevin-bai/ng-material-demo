import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/login',
//     pathMatch: 'full'
//   },
//   {
//     path: 'projects',
//     loadChildren: 'app/project#ProjectModule',
//     pathMatch: 'full',
//     canActivate: [AuthGuardService]
//   },
//   {
//     path: 'tasklists/:id',
//     loadChildren: 'app/task#TaskModule',
//     canActivate: [AuthGuardService]
//   },
//   {
//     path: 'mycal/:view',
//     loadChildren: 'app/my-calendar#MyCalendarModule',
//     canActivate: [AuthGuardService]
//   },
//   {
//     path: '**', component: PageNotFoundComponent
//   }
// ];
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
// }
