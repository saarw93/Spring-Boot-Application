import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from './../service/httpclient.service';
import { InventoryItem } from './../model/InventoryItem';


@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

  item : InventoryItem;

  constructor( 
    private router: Router,
    private httpClientService: HttpClientService) 
    {
      this.item = new InventoryItem();
    }


  onSubmit() {
    this.httpClientService.update(this.item).subscribe( response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.router.navigate(['/inventory']);
  }


  ngOnInit() {}

}
