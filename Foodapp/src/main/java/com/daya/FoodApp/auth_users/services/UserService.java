package com.daya.FoodApp.auth_users.services;

import com.daya.FoodApp.auth_users.dtos.UserDTO;
import com.daya.FoodApp.auth_users.entity.User;
import com.daya.FoodApp.response.Response;

import java.util.List;

public interface UserService {


    User getCurrentLoggedInUser();

    Response<List<UserDTO>> getAllUsers();

    Response<UserDTO> getOwnAccountDetails();

    Response<?> updateOwnAccount(UserDTO userDTO);

    Response<?> deactivateOwnAccount();

}
