import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProfilesService } from '../profiles.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileRouteActivationService implements CanActivate {

  constructor(
    private profileService: ProfilesService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {

    let id = route.params['id'];
    let profileExists = !!this.profileService.getProfile(id);

    if (!profileExists) {
      this.router.navigate(['/404']);
    }
    console.log(`profile -> ${profileExists} y el id es ${id}`);

    return profileExists;
  }

}
