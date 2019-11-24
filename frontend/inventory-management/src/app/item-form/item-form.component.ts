import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from './../service/httpclient.service';
import { InventoryItem } from './../model/InventoryItem';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item : InventoryItem;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private httpClientService: HttpClientService) 
    {
      this.item = new InventoryItem();
    }

    onSubmit() {
      this.httpClientService.save(this.item).subscribe( result => this.handleSuccessfulResponse(),
      );
    }

    handleSuccessfulResponse() {
      this.router.navigate(['/inventory']);
    }

  ngOnInit() {}

}
