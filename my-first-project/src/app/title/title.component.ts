import { Component, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnChanges, OnDestroy {
  
  @Input() public title: string = "Welcome!"

  ngOnChanges(): void {

  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
}
