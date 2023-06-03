import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* showSecret=false;
  log=[];
  onToggleDetails(){
    this.showSecret=!this.showSecret;
    this.log.push(new Date());
  } */
  oddNumbers: number[]=[];
  evenNumbers: number[]=[];
  onIntervalFired(firedNumber:number){
    console.log(firedNumber);
    if(firedNumber%2===0){
      this.evenNumbers.push(firedNumber);

    }else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
