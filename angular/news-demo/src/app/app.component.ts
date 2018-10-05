import { Component, OnInit } from "@angular/core";

import { NewsApiService } from "./news-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "news-demo";
  articles: any[];
  sources: any[];

  constructor(private newsapi: NewsApiService) {}

  ngOnInit() {
    this.newsapi
      .getArticles()
      .subscribe(data => (this.articles = data["articles"]));

    this.newsapi
      .getSources()
      .subscribe(data => (this.sources = data["sources"]));
  }
}
