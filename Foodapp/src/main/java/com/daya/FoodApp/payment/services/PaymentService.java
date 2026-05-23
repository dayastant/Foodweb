package com.daya.FoodApp.payment.services;

import com.daya.FoodApp.payment.dtos.PaymentDTO;
import com.daya.FoodApp.response.Response;

import java.util.List;

public interface PaymentService {

    Response<?> initializePayment(PaymentDTO paymentDTO);
    void updatePaymentForOrder(PaymentDTO paymentDTO);
    Response<List<PaymentDTO>> getAllPayments();
    Response<PaymentDTO> getPaymentById(Long paymentId);

}
