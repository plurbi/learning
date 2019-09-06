import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProfile } from 'src/app/shared/models/profile.model';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  constructor(
    private profilesService: ProfilesService,
    private route: ActivatedRoute,
    private router: Router) { }

  isDirty: boolean;
  profile: IProfile;
  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.profile = this.profilesService.getProfile(id);
  }

  cancel(): void {
    this.router.navigate(['/profile']);
  }
}
