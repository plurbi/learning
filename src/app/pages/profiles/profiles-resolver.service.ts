import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProfilesService } from 'src/app/services/profiles.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfilesResolver implements Resolve<any> {

  constructor(private profilesService: ProfilesService) {
    
  }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    console.log('resolve');
    
    return this.profilesService.getProfiles().pipe(map(profiles => profiles))
  }

 
}
