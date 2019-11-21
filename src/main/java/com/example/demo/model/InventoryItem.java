package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "inventory")
@ApiModel(description = "Provides details about each item in the inventory list")
public class InventoryItem {

	@Id
	@GeneratedValue
	@ApiModelProperty(notes = "An auto generated value for each item in the inventory list (I was not sure if I can refer the 'itemNo' property as an Identifier or not, so I use this id property)")
	private Long id;
	private String itemNo;
	private String name;
	private Long amount;
	private String inventoryCode;
	

	public InventoryItem() {
		super();
	}
	
	public Long getId() {
		return id;
	}
	
	public String getItemNo() {
		return itemNo;
	}
	public void setItemNo(String itemNo) {
		this.itemNo = itemNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Long getAmount() {
		return amount;
	}
	public void setAmount(Long amount) {
		this.amount = amount;
	}
	public String getInventoryCode() {
		return inventoryCode;
	}
	public void setInventoryCode(String inventoryCode) {
		this.inventoryCode = inventoryCode;
	}
}
