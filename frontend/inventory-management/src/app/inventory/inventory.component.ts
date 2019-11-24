import { InventoryItem } from './../model/InventoryItem';
import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory : InventoryItem[];

  constructor(
    private httpClientService : HttpClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.httpClientService.getAllInventoryItems().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

  handleSuccessfulResponse(response)
  {
    console.log(response);
    this.inventory = response;  //storing the data we get back from the spring boot app
  }

  increaseAmount(itemNo : string){
    this.httpClientService.increaseAmount(itemNo).subscribe(
      response => {  console.log(response);
        this.httpClientService.getAllInventoryItems().subscribe(
          response =>this.handleSuccessfulResponse(response),
         );
        });
      }

  decreaseAmount(itemNo : string){
    this.httpClientService.decreaseAmount(itemNo).subscribe(
      response => {  console.log(response);
        this.httpClientService.getAllInventoryItems().subscribe(
          response =>this.handleSuccessfulResponse(response),
          );
        });
      }


}
