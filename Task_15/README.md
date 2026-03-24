# 🚀 Task 15: Service Registry & Discovery using Eureka

## 📌 Objective
Implement **Service Registry and Discovery** using **Eureka Server** in a microservices architecture.  
Register multiple services and enable **dynamic service communication** instead of hardcoded URLs.

---

## 🏗️ Architecture Overview

```
        ┌───────────────┐
        │ Eureka Server │
        │   (Port 8761) │
        └──────┬────────┘
               │
     ┌─────────┼─────────┐
     │         │         │
┌─────────┐ ┌─────────┐ ┌────────────┐
│ Identity│ │ User    │ │ Product    │
│ Service │ │ Service │ │ Service    │
│ (8081)  │ │ (8082)  │ │ (8083)     │
└─────────┘ └─────────┘ └────────────┘
```

---

## 🛠️ Technologies Used

- Java 17  
- Spring Boot 3.2.x  
- Spring Cloud 2023.0.x  
- Eureka Server (Netflix OSS)  
- Maven  
- Eclipse IDE  

---

## 📦 Microservices Included

| Service Name       | Port  | Description |
|------------------|------|-------------|
| Eureka Server     | 8761 | Service Registry |
| Identity Service  | 8081 | Authentication / Identity |
| User Service      | 8082 | User Management |
| Product Service   | 8083 | Product Management |

---

## ⚙️ Setup Instructions

### 🔹 Step 1: Create Eureka Server

1. Create Spring Boot project  
2. Add dependency:
   ```
   spring-cloud-starter-netflix-eureka-server
   ```
3. Main class:
   ```java
   @SpringBootApplication
   @EnableEurekaServer
   public class EurekaServerApplication {
       public static void main(String[] args) {
           SpringApplication.run(EurekaServerApplication.class, args);
       }
   }
   ```

4. `application.properties`:
   ```properties
   server.port=8761

   eureka.client.register-with-eureka=false
   eureka.client.fetch-registry=false
   ```

---

### 🔹 Step 2: Create Microservices

Repeat for:
- Identity Service
- User Service
- Product Service

---

### 🔹 Step 3: Add Dependencies

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

---

### 🔹 Step 4: Enable Discovery Client

```java
@SpringBootApplication
@EnableDiscoveryClient
public class ServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }
}
```

---

### 🔹 Step 5: Configure application.properties

Example (Identity Service):

```properties
spring.application.name=identity-service
server.port=8081

eureka.client.service-url.defaultZone=http://localhost:8761/eureka/
```

---

## ▶️ Running the Application

1. Start Eureka Server  
   👉 http://localhost:8761  

2. Start all services:
   - Identity Service  
   - User Service  
   - Product Service  

---

## ✅ Expected Output

Eureka Dashboard should display:

```
IDENTITY-SERVICE
USER-SERVICE
PRODUCT-SERVICE
```

---

## 🔄 How Service Discovery Works

- Each service registers itself with Eureka  
- Eureka maintains a registry of services  
- Services communicate using **service names**, not URLs  
- Enables:
  - Load balancing  
  - Fault tolerance  
  - Scalability  

---

## 🧠 Skills Gained

- Microservices Architecture  
- Service Discovery  
- Spring Cloud Integration  
- REST API Development  
- Debugging Distributed Systems  

---

## 🌍 Real-World Applications

- E-commerce platforms  
- Payment gateways  
- Banking systems  
- Cloud-native applications  
- Scalable backend systems  

---

## ⚠️ Common Issues & Fixes

| Issue | Solution |
|------|---------|
| Eureka client not registering | Check service URL |
| Version conflicts | Use Spring Boot 3.2.x |
| Dependency errors | Update Maven project |
| Port conflicts | Change server.port |

---

## 🎯 Conclusion

This task demonstrates how microservices dynamically discover and communicate with each other using **Eureka**, eliminating hardcoded configurations and improving scalability and flexibility.
