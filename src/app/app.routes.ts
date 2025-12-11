import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { DynamicResumeComponent } from './components/dynamic-resume/dynamic-resume.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'roadmap', component: RoadmapComponent },
    { path: 'dynamic-resume', component: DynamicResumeComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
