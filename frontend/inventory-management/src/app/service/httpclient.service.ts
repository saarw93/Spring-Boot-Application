import { InventoryItem } from './../model/InventoryItem';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HttpClientService {

  private inventoryItemsUrl : string;

  constructor( private httpClient : HttpClient) 
  {
    this.inventoryItemsUrl = 'http://localhost:8088/inventory';
    //this.inventoryItemsUrl = 'http://192.168.99.100:8088/inventory';
  }

  public getAllInventoryItems(): Observable<InventoryItem[]> {
    return this.httpClient.get<InventoryItem[]>(this.inventoryItemsUrl);
  }
 
  public save(item : InventoryItem) {
    return this.httpClient.post<InventoryItem>(this.inventoryItemsUrl, item);
  }

  public delete(id : number) {
    return this.httpClient.delete<void>(`${this.inventoryItemsUrl}/${id}`);
  }

  public update(item : InventoryItem) {
    return this.httpClient.put<void>(this.inventoryItemsUrl, item, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public getItem(itemNo : string) {
    return this.httpClient.get<InventoryItem>(`${this.inventoryItemsUrl}/${itemNo}`);
  }

  public increaseAmount(itemNo : string){
    return this.httpClient.put<void>(`${this.inventoryItemsUrl}/${itemNo}/increase`, itemNo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public decreaseAmount(itemNo : string){
    return this.httpClient.put<void>(`${this.inventoryItemsUrl}/${itemNo}/decrease`, itemNo, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}