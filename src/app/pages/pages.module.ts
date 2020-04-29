import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MyNoteComponent } from './my-note/my-note.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from '../components/chart/chart.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [HomeComponent, MyNoteComponent, ChartComponent, EventComponent],
  exports: [HomeComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, ChartsModule],
})
export class PagesModule {}
