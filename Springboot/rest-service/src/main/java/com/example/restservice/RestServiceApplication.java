package com.example.restservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RestServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestServiceApplication.class, args);
	}
}

/*
note
@RestController = define restfull web services (services: JSON, XML) = contohnya kayak @RequestMapping
@RequestMapping = define the request URL untuk access ke REST Endpoints
AtomicLong = untuk set id
@GetMapiing = get request (sesuai dengan url nya)
@RequestParam = ambil param dari user
 */

/*
run maven
./mvnw package = target ada file .jar
java -jar target/rest-service-0.0.1-SNAPSHOT.jar (sesuaikan dengan nama file .jarnya)


postman
http://localhost:8080/greeting
http://localhost:8080/greeting?name=bambang
 */