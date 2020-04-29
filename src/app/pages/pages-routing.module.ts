import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyNoteComponent } from './my-note/my-note.component';
import { EventComponent } from './event/event.component';

const pagesRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'my-note',
    component: MyNoteComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
