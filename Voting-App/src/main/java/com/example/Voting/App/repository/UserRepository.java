package com.example.Voting.App.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Voting.App.entity.User;


    public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
