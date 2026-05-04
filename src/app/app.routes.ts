import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { ChatComponent } from './components/chat/chat.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: '' }
];
