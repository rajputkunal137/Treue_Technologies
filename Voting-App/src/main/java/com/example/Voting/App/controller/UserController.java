package com.example.Voting.App.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Voting.App.entity.User;
import com.example.Voting.App.service.UserService;
@CrossOrigin
@RestController
public class UserController {
    @Autowired
    private UserService userService;
    
    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        userService.registerUser(user);
        return "redirect:/login";
    }
     
    
   
       
}
