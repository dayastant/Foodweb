package com.daya.FoodApp.auth_users.services;

import com.daya.FoodApp.auth_users.dtos.LoginRequest;
import com.daya.FoodApp.auth_users.dtos.LoginResponse;
import com.daya.FoodApp.auth_users.dtos.RegistrationRequest;
import com.daya.FoodApp.response.Response;

public interface AuthService {
    Response<?> register(RegistrationRequest registrationRequest);
    Response<LoginResponse> login(LoginRequest loginRequest);
}
