import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent implements OnInit {
  public value: boolean = true;
  public heightPx: string = "30px";
  public bgColor: string = "blue";
  public other: string = "";
  public list: Array<{ name: string, age: number }> = [{ name: "Gabriel 1", age: 25 }, { name: "Gabriel   2", age: 25 }]

  public ngOnInit(): void {
    setInterval(() => { 
      this.value = !this.value;

      if (this.heightPx == "30px") {
        this.heightPx = "60px";
        this.bgColor = "white";
      } else {
        this.heightPx = "30px";
        this.bgColor = "blue";
      }
    }, 2000);
  }
}
