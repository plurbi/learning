import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor() { }

  profiles : any [];
  loggedProfile: any;

  ngOnInit() {
    this.loggedProfile =   {
      name: "Patricio",
      surname: "Urbieta",
      age: 36,
      description: "Este soy yo haciendo una prueba",
      image: "data:image/jpeg;base64,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",
      isAuthor: true
    }

    this.profiles = [
      {
        name: "Pato",
        surname: "Buscador",
        age: 36,
        description: "Duis risus velit, venenatis eu orci ut, commodo pellentesque felis. Vivamus aliquet tempus.",
        image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F9%2F90%2FThe_DuckDuckGo_Duck.png&f=1",
        isAuthor: true
      },
      {
        name: "Saul",
        surname: "Hudson",
        age: 54,
        description: "Slash!!!!!!! Genio total de la guitarra.",
        image: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F7c%2F34%2Fe7%2F7c34e7bc3013b2406eef0f2a4a34a076.jpg&f=1"
      }
    ]
  }

}
