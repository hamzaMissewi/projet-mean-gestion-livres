import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css'],
})
export class HeaderSectionComponent {
  searchIcon = faSearch;
  facebook = faFacebook;
  youtube = faYoutube;
  twitch = faTwitch;
  twitter = faTwitter;

  constructor() {}
  // ngOnInit(): void {}
}
