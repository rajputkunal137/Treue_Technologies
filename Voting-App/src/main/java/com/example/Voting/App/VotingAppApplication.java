package com.example.Voting.App;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@SpringBootApplication
@ComponentScan
public class VotingAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(VotingAppApplication.class, args);
	}

}
