import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-universal-firebase';

  constructor(private meta: Meta, private tit: Title) {}

  ngOnInit() {
    this.updateMetaData();
  }

  updateMetaData = () => {
    this.tit.setTitle('This is a test man!');
    this.meta.updateTag({
      name: 'description',
      content: 'The best description ever for you from me to you yay...',
    });
  };
}
