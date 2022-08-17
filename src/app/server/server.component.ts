import { Component } from '@angular/core';
import { withLatestFrom } from 'rxjs';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }`]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = '';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'Offline' ? 'Red' : 'Green';
    }
}