import {Component, NgZone} from '@angular/core';
import {NavController, Platform} from '@ionic/angular';
import {Deeplinks} from '@ionic-native/deeplinks/ngx';
import {Tab1Page} from './tab1/tab1.page';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform,
              private navCtrl: NavController,
              private deeplinks: Deeplinks,
              private zone: NgZone,
              private router: Router) {
    this.platform.ready().then(() => {
      this.deeplinks.routeWithNavController(this.navCtrl, {
        '/deeppage': Tab1Page,
      }).subscribe(match => {
        // match.$route - the route we matched, which is the matched entry from the arguments to route()
        // match.$args - the args passed in the link
        // match.$link - the full link data
        console.log('Successfully matched route', match);
        this.zone.run(() => {
          this.router.navigate(['deep']);
        });
      }, nomatch => {
        // nomatch.$link - the full link data
        console.error('Got a deeplink that didn\'t match', nomatch);
      });
    });
  }
}
