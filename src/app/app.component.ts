import { Component, OnDestroy, OnInit } from '@angular/core';
import { MicroFrontendService } from '@liantis-ds/micro-frontend-tools';

@Component({
  selector: 'portal-client1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private readonly microFrontendService: MicroFrontendService) {}

  ngOnDestroy(): void {
    this.microFrontendService.destroy();
  }

  ngOnInit(): void {
    this.microFrontendService.init();
  }
}
