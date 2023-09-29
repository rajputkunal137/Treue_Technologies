package com.example.Voting.App.controller;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;


public class ErrorController {
	@PostMapping("/error")
    public String errorReturn(Model model) {

        return "This is error controller";
    }
}
