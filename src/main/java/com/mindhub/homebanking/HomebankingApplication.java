package com.mindhub.homebanking;

import com.mindhub.homebanking.models.Client;
import com.mindhub.homebanking.repositories.ClientRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class HomebankingApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomebankingApplication.class, args);
	}


	@Bean
	public CommandLineRunner initData(ClientRepository repository) {
		return (args) -> {
			// save a couple of customers
			repository.save(new Client("Matias", "Ramos", "matias123@gmail.com"));
			repository.save(new Client("Raul", "Perez", "raulperez123@gmail.com"));
			repository.save(new Client("juan", "gonzales", "juancito@gmail.com"));

		};
	}
}