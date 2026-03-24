package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class UserClient {

    @Autowired
    private RestTemplate restTemplate;

    public String getUsers() {
        return restTemplate.getForObject(
            "http://identity-service/users",   // 🔥 service name
            String.class
        );
    }
}