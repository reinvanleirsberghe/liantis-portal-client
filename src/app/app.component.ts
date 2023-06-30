import { Component, OnDestroy, OnInit } from '@angular/core';
import { MicroFrontendService } from '@liantis-ds/micro-frontend-tools';
import { ScreenOrientation } from '@capacitor/screen-orientation';
import { Device } from '@capacitor/device';
import { Share } from '@capacitor/share';

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

    ScreenOrientation.addListener(
      'screenOrientationChange',
      this.handleOrientationChange
    );

    this.logDeviceInfo();
  }

  logDeviceInfo = async () => {
    const info = await Device.getInfo();

    console.log(info);
  };

  shareInfo = async () => {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  };

  handleOrientationChange() {
    ScreenOrientation.orientation()
      .then((result) => {
        console.log('CLIENT1 - current orientation result', result);
        // Perform any actions based on the new orientation
      })
      .catch((error) => {
        console.error('CLIENT2 - Error getting orientation:', error);
      });
  }
}
