import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output() public sendData = new EventEmitter();
  public list: Array<{ name: string, age: number }> = [{ name: "Gabriel 1", age: 25 }, { name: "Gabriel   2", age: 25 }]
  
  public getData(index: number) {
    this.sendData.emit(this.list[index])
    console.log(index);
  }
}
