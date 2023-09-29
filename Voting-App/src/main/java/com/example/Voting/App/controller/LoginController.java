package com.example.Voting.App.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LoginController {

    @PostMapping("/login")
    public String processLoginForm(@RequestParam("username") String username,
                                   @RequestParam("password") String password,
                                   Model model) {
    	
    	System.out.println(username + " " + password + " " + username.getClass().getSimpleName());

        model.addAttribute("username", username);
        return "redirect:/dashboard"; // Redirect to a dashboard page
    }
}

