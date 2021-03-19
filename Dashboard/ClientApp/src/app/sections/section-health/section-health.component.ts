import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ServerService } from '../../services/server.service';
import { Server } from '../../shared/server';
import { AnonymousSubscription } from 'rxjs/Subscription';

/*const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-web', isOnline: true},
  {id: 2, name: 'dev-mail', isOnline: false},
  {id: 3, name: 'prod-web', isOnline: true},
  {id: 4, name: 'prod-web', isOnline: true},
]*/

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit, OnDestroy {

  servers: Server[];
  timerSubscription: AnonymousSubscription;

  constructor(private _serverService: ServerService) { }

  ngOnInit() {
    this.refreshData();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  refreshData() {
    this._serverService.getServers()
      .subscribe(res => {
        this.servers = res;
      });
    this.subscribeToData();
  }

  subscribeToData() {
    this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
  }
}
