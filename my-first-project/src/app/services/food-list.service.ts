import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = ["Feijão", "Arroz", "Ovo"];
  private url: string = "http://localhost:3000/";

  constructor(private httpClient: HttpClient) { }
  /*public getFoodList(): Array<string> {
    return this.list; 
   }*/

  public getFoodList(): Observable<Array<FoodList>> {
   // return this.list;
    return this.httpClient
      .get<Array<FoodList>>(`${this.url}list-food`)
      .pipe(
        res => res,
        error => error 
      );
  }

  /*public foodListAdd(value: string) {
    this.foodListInformation(value)
    return this.list.push(value);
  }*/

  public foodListAdd(value: string): Observable<FoodList> {
    return this.httpClient
    .post<FoodList>(`${this.url}list-food`, { name: value})
    .pipe(
      res => res,
      error => error
    );
  }

  public foodListPut(id: number, value: string): Observable<FoodList> {
    return this.httpClient
    .put<FoodList>(`${this.url}list-food/${id}`, { name: value})
    .pipe(
      res => res,
      error => error
    );
  } 

  public foodListDelete(id: number): Observable<FoodList> {
    return this.httpClient
    .delete<FoodList>(`${this.url}list-food/${id}`)
    .pipe(
      res => res,
      error => error
    );
  }

  /*public foodListInformation(value: string) {
    return this.emitEvent.emit(value)
  }*/

  public foodListInformation(res: FoodList) {
    return this.emitEvent.emit(res)
  }
}
