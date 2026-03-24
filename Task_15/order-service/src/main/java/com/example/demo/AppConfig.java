package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;

@Configuration
public class AppConfig {

    @Bean
    @LoadBalanced   // 🔥 VERY IMPORTANT
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}