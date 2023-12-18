import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  // {
  //   path: 'first',component:ChildComponent
  // },
  // {
  //   path: 'second',component:Child1Component
  // },
  // { 
  //   path: '', redirectTo: '/first', pathMatch: 'full' 
  // },
  // {
  //   path: 'ca',component:CalculatorComponent
  // }
  {
    path: '',
    loadChildren: () => import('./rxjs/rxjs.module').then(m => m.RxjsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
