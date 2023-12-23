import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuelComponent } from './duel/duel.component';
import { HomeComponent } from './home/home.component';
import { InspectComponent } from './inspect/inspect.component';
import {CommonModule} from "@angular/common";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "inspect", component: InspectComponent, data: { animation: 'isLeft' } },
  { path: "duel", component: DuelComponent, data: { animation: 'isRight' }}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
