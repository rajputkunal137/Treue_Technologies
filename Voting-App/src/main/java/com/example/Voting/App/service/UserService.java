package com.example.Voting.App.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Voting.App.entity.User;
import com.example.Voting.App.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public void registerUser(User user) {
        userRepository.save(user);
    }
    
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
