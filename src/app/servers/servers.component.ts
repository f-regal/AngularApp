import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created !";
  serverName = 'testServer';
  
  //Constructor is the function that runs as soon as Angular App is spun up.
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer () {
    this.serverCreationStatus = "Server Created !"
  }

  onUpdateServerName (event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
}


