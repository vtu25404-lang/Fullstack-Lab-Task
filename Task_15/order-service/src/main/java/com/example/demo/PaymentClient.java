package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class PaymentClient {

    @Autowired
    private RestTemplate restTemplate;

    public String getPayment() {
        return restTemplate.getForObject(
            "http://payment-service/payments",   // 🔥 service name
            String.class
        );
    }
}
