package com.daya.FoodApp.role.services;

import com.daya.FoodApp.response.Response;
import com.daya.FoodApp.role.dtos.RoleDTO;

import java.util.List;

public interface RoleService {

    Response<RoleDTO> createRole(RoleDTO roleDTO);
    Response<RoleDTO> updateRole(RoleDTO roleDTO);
    Response<List<RoleDTO>> getAllRole();
    Response<?> deleteRole(Long id);

}
