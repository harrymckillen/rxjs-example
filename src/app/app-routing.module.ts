import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'playground',
    component: ObservableTestComponent,
  },
  {
    path: 'forecast/:zipcode',
    component: ForecastListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
