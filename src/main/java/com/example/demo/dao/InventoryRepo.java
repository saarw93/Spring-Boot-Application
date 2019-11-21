package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.example.demo.model.InventoryItem;

public interface InventoryRepo extends JpaRepository<InventoryItem, Long> {

	InventoryItem findByItemNo(String itemNo);
	
	List<InventoryItem> deleteByItemNo(String itemNo);
	
	@Query("from InventoryItem where itemNo=?1 order by amount")
	List<InventoryItem> findByItemNoSorted(String itemNo);
}
