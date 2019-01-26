import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items;

  constructor(private _hackerNewsAPIService: HackernewsApiService) {
  }

  ngOnInit() {
    this._hackerNewsAPIService.fetchStories().subscribe(
      items => this.items = items,
      error => console.log('Error fetching stories'));
  }
}
