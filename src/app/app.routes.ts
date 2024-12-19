import { Routes } from '@angular/router';
import { TicketsComponent } from './features/tickets/tickets.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketsComponent },
];
