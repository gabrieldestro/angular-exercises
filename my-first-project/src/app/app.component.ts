import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-reactive-forms></app-reactive-forms>
    <app-forms></app-forms>
    <app-food-add></app-food-add>
    <app-food-list></app-food-list>

    <app-attribute-directives>
      <h1>Attribute Directives</h1>
      <hr>
    </app-attribute-directives>

    <app-attribute-directives>
      <h1>Attribute Directives2</h1>
      <hr>
    </app-attribute-directives>

    <app-attribute-directives></app-attribute-directives>
    <app-new-component></app-new-component>
    <app-input [counter]="addValue"></app-input>
    <button (click)="add()">Add</button>

    <ng-template [ngIf]="exportedData">
      <h1>{{exportedData.name}}</h1>
      <h1>{{exportedData.age}}</h1>
    </ng-template>
    <app-output (sendData)="setData($event)"></app-output>

    
    <router-outlet></router-outlet>
    `
})
export class AppComponent {

  public destroy: boolean = true;
  public addValue: number = 10;

  public exportedData: {name: string, age: number} | undefined;

  public destroyComponent() {
    this.destroy = false;
  }

  public add() {
    this.addValue++;
  }

  public setData(event: any) {
    this.exportedData = event;
    alert(this.exportedData?.name + " " + this.exportedData?.age)
  }
}
