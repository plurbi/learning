import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ProfileDetailComponent } from './pages/profile-detail/profile-detail.component';
import { Error404Component } from './pages/errors/error404/error404.component';
import { ProfileRouteActivationService } from './services/routesActiv/profile-route-activation.service';
import { ProfilesResolver } from './pages/profiles/profiles-resolver.service';
import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
  {
    path: "profiles",
    component: ProfilesComponent,
    resolve: { profilesResolve: ProfilesResolver }
  },
  {
    path: "profile/:id",
    component: ProfileDetailComponent,
    canActivate: [ProfileRouteActivationService]
  },
  { path: 'vehicles', loadChildren: './pages/vehicles/vehicle.module#VehicleModule' },
  { path: 'login', component: LoginComponent },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: '/profiles', pathMatch: "full" },
  { path: "*", redirectTo: '/404', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
