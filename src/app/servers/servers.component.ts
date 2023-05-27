import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer=false;
  serverCreationStatus='No server was created!';
  serverName='testserver';
  serverCreated=false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }
  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus='Server was created and name is'+this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
