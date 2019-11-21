package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;
import javax.xml.crypto.URIReferenceException;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.InventoryRepo;
import com.example.demo.model.InventoryItem;

import io.swagger.annotations.ApiOperation;


@RestController
public class InventoryController {

	@Autowired
	InventoryRepo repo;
	
	@GetMapping("/inventory")
	@ApiOperation(value = "Gets all the inventory items",response= InventoryItem.class)
	public List<InventoryItem> getAllInventoryItems()
	{
		return repo.findAll();
	}
	
	@GetMapping("/inventory/{itemNo}")
	@ApiOperation(value = "Gets a specific item from the inventory. It gets the wanted item by using it's 'itemNo' property. If the item is not in the list, returns nothing",response= InventoryItem.class)
	public InventoryItem getInventoryItemDetails(@PathVariable("itemNo") String itemNo) {
		InventoryItem item = repo.findByItemNo(itemNo);
		if (item != null)
			return item;
		return null;
	}
	
	@PostMapping(path="/inventory", consumes= {"application/json"})
	@ApiOperation(value = "Adds an item to the inventory",response= InventoryItem.class)
	public List<InventoryItem> addItem(@Valid @RequestBody InventoryItem item) throws URIReferenceException {
		repo.save(item);
		return repo.findAll();
	}
	
	@PutMapping("/inventory/{itemNo}/increase")
	@ApiOperation(value = "Increases by one the amount of a specific item in the inventory. It gets the wanted item by using it's 'itemNo' property",response= InventoryItem.class)
	public InventoryItem increaseItemAmount(@PathVariable("itemNo") String itemNo) {
		InventoryItem item = repo.findByItemNo(itemNo);
		if (item != null) {
			item.setAmount(item.getAmount()+1);
			BeanUtils.copyProperties(item, item);
			repo.save(item);
			return item;
		}
		return null;
	}
	
	@PutMapping("/inventory/{itemNo}/decrease")
	@ApiOperation(value = "Decreases by one the amount of a specific item in the inventory. It gets the wanted item by using it's 'itemNo' property",response= InventoryItem.class)
	public InventoryItem decreaseItemAmount(@PathVariable("itemNo") String itemNo) {
		InventoryItem item = repo.findByItemNo(itemNo);
		if (item != null) {
			if (item.getAmount() > 0) {
				item.setAmount(item.getAmount()-1);
				BeanUtils.copyProperties(item, item);
				repo.save(item);
			}
			return item;
		}
		return null;
	}
	
	@DeleteMapping("/inventory/{id}")
	@ApiOperation(value = "Deletes an item from the inventory. It gets the wanted item by using it's 'id' property",response= InventoryItem.class)
	public List<InventoryItem> deleteItem(@PathVariable Long id) throws URIReferenceException{
		repo.deleteById(id);
		return repo.findAll();
	}

	
	@PutMapping(path="/inventory", consumes= {"application/json"})
	@ApiOperation(value = "Updates an item which is in the inventory. If the item does not exist in the inventory it get created. It consumes a json",response= InventoryItem.class)
	public List<InventoryItem> UpdateItem(@Valid @RequestBody InventoryItem item) throws URIReferenceException {
		String itemNo = item.getItemNo();
		List<InventoryItem> listItem = repo.findByItemNoSorted(itemNo);
		if (listItem.isEmpty()) //if the item does not exists in the DB, save it
			repo.save(item);
		else {
			BeanUtils.copyProperties(item, listItem.get(0));
			repo.save(listItem.get(0));
		}
		return repo.findAll();
	}
	
//	@DeleteMapping("/inventory/{itemNo}")
//	public List<InventoryItem> deleteItem(@PathVariable("itemNo") String itemNo) throws URIReferenceException{
//		InventoryItem item = repo.findByItemNo(itemNo);
//		if(item != null)
//			repo.delete(item);
//		return repo.findAll();
//	}
}
