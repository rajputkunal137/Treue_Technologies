package com.example.Voting.App.entity;

import jakarta.persistence.*;

@Entity
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String voterName;
    private String candidate;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getVoterName() {
        return voterName;
    }
    public void setVoterName(String voterName) {
        this.voterName = voterName;
    }
    public String getCandidate() {
        return candidate;
    }
    public void setCandidate(String candidate) {
        this.candidate = candidate;
    }
    
}

