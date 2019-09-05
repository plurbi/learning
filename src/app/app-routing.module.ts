import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileDetailComponent } from './pages/profile-detail/profile-detail.component';
import { Error404Component } from './pages/errors/error404/error404.component';
import { ProfileRouteActivationService } from './services/routesActiv/profile-route-activation.service';


const routes: Routes = [
  { path: "profile", component: ProfilesComponent },
  { path: "profile/:id", component: ProfileDetailComponent, canActivate: [ProfileRouteActivationService] },
  { path: "404", component: Error404Component },
  { path: "", component: ProfilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
