import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Rota raiz
  { path: 'content', component: ContentComponent },
  { path: 'about', component: ContentComponent },
  { path: 'project', component: ContentComponent },
  { path: 'contact', component: ContentComponent },
  { path: '**', redirectTo: '' }, // Rota curinga (wildcard)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
