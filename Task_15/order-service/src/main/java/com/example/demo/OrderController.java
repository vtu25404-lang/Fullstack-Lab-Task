package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private UserClient userClient;

    @Autowired
    private PaymentClient paymentClient;

    @GetMapping
    public String getOrder() {
        return "Order Created | " + userClient.getUsers();
    }

    @GetMapping("/payment")
    public String payment() {
        return paymentClient.getPayment();
    }
}
