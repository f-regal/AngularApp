import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server was created !";
  serverName = '';
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  
  //Constructor is the function that runs as soon as Angular App is spun up.
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer () {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Created ! The name is: ' + this.serverName;
    this.servers.push(this.serverName);
    
  }

  onUpdateServerName (event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }
}


