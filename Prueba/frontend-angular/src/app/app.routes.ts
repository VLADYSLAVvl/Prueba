import { Routes } from '@angular/router';
import { AgenteFrontendComponent } from './components/agente-frontend/agente-frontend'; // ← Sin el ".component" largo

export const routes: Routes = [
  { path: '', redirectTo: 'entradas', pathMatch: 'full' },
  { path: 'entradas', component: AgenteFrontendComponent }
];