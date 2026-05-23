package com.daya.FoodApp.menu.repository;


import com.daya.FoodApp.menu.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface MenuRepository extends JpaRepository<Menu,Long> , JpaSpecificationExecutor<Menu> {

}
