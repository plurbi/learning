import { Injectable } from '@angular/core';
import { IProfile } from '../shared/models/profile.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor() { }


  getProfiles() {
    let subject = new Subject();
    setTimeout(() => {
      subject.next(this.PROFILES);
      subject.complete();
    }, 100);
    return subject;
  }
  getProfile(idProf: number): IProfile {
    let prof: IProfile = this.PROFILES.filter(id => id.id == idProf)[0];
    return prof;
  }

  PROFILES: IProfile[] = [
    {
      id: 1,
      name: "Pato",
      surname: "Buscador",
      age: 36,
      description: "Duis risus velit, venenatis eu orci ut, commodo pellentesque felis. Vivamus aliquet tempus.",
      image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F9%2F90%2FThe_DuckDuckGo_Duck.png&f=1",
      isAuthor: true
    },
    {
      id: 2,
      name: "Saul",
      surname: "Hudson",
      age: 54,
      description: "Slash!!!!!!! Genio total de la guitarra.",
      image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F7c%2F34%2Fe7%2F7c34e7bc3013b2406eef0f2a4a34a076.jpg&f=1",
      isAuthor: false
    },
    {
      id: 3,
      name: "Liv",
      surname: "Tyler",
      age: 30,
      description: "Steven!!!!!!! Genio total de la guitarra.",
      image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-QQ3ymJR-Jas%2FThmmEItesfI%2FAAAAAAAAB4g%2FwEzs21QB3uo%2Fs1600%2FLiv-Tyler-Wallpaper-normal.jpg&f=1&nofb=1",
      isAuthor: false
    }
  ]

}
