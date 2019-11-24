import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from './../service/httpclient.service';


@Component({
  selector: 'app-item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.css']
})
export class ItemDeleteComponent implements OnInit {


  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private httpClientService: HttpClientService) {}

  onSubmit(id) {
    console.log(id);
    this.httpClientService.delete(id).subscribe(() => this.handleSuccessfulResponse(),);
  }
  
  handleSuccessfulResponse() {
    this.router.navigate(['/inventory']);
  }


  ngOnInit() {}

}
