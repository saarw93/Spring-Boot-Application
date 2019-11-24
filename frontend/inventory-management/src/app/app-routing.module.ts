import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemDeleteComponent } from './item-delete/item-delete.component';
import { ItemUpdateComponent } from './item-update/item-update.component';
import { GetItemComponent } from './get-item/get-item.component';


const routes: Routes = [
  { path: 'inventory', component: InventoryComponent },
  { path: 'additem', component: ItemFormComponent },
  { path: 'deleteitem', component: ItemDeleteComponent },
  { path: 'updateitem', component: ItemUpdateComponent },
  { path: 'inventory/item', component: GetItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }