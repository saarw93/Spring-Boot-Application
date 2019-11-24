import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-item',
  templateUrl: './get-item.component.html',
  styleUrls: ['./get-item.component.css']
})
export class GetItemComponent implements OnInit {

  constructor(
    private router: Router,
    private httpClientService: HttpClientService) {}

  
  onSubmit(itemNo) {
    this.httpClientService.getItem(itemNo).subscribe( 
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    
    const id = response['id'];
    const itemNo = response['itemNo'];
    const name = response['name'];
    const amount = response['amount'];
    const inventoryCode = response['inventoryCode'];
    let item = "<table class='table table-bordered table-striped text-center'><thead class='thead-dark'><tr>"
    item+="<th>id</th><th>itemNo</th><th>name</th><th>amount</th><th>inventoryCode</th>"
    item+="</thead><tbody><tr><td>" + id + "</td><td>" + itemNo + "</td><td>" + name + "</td><td>" + amount + "</td>"
    item+="<td>" + inventoryCode + "</td></tbody></table>"

    console.log(item);
    document.getElementById('item-table').innerHTML = item;
}

  ngOnInit() {}

}
