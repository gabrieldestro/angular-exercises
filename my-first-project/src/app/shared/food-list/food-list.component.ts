import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) {
  }

  ngOnInit(): void {
    this.foodListService.getFoodList().subscribe(
      res => this.foodList = res,
      error => error
    );

    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`You added one item: ${res.name}`);
        return this.foodList.push(res);
      }
    );
  }

  public foodListEdit(id: number, value: string) {
    this.foodListService.foodListPut(id, value).subscribe(
      res => alert(`Item edited to: ${res.name}`),
      error => alert(`Error editing item: ${error}`)
    );
  }

  public foodListDelete(id: number) {
    this.foodListService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter( item => { return id != item.id })
      },
      error => error
    );
  }
}
