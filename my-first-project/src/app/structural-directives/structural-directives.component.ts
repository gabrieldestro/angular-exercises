import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ name: string, age: number }> = [{ name: "Gabriel 1", age: 25 }, { name: "Gabriel   2", age: 25 }]
  
  public name: string = 'gabriel2';

  public ngOnInit(): void {
    setInterval(() => { 
      this.condition = !this.condition; 
    }, 2000)
  }

  public onClick(): void {
    this.conditionClick = !this.conditionClick; 
  }

  public onClickAdd(): void {
    this.list.push( {name: "Gabriel X", age: 20} );
  }

  public onClickItem(item: any): void {
    console.log(item.name + " " + item.age)
  }
}
