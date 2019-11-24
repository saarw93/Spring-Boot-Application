import { HttpClientService } from './service/httpclient.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemDeleteComponent } from './item-delete/item-delete.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { GetItemComponent } from './get-item/get-item.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ItemFormComponent,
    ItemDeleteComponent,
    ItemUpdateComponent,
    GetItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
