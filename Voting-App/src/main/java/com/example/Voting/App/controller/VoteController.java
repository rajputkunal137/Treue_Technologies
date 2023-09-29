package com.example.Voting.App.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Voting.App.entity.Vote;
import com.example.Voting.App.service.VoteService;

@RestController
@CrossOrigin
public class VoteController {
    @Autowired
    private VoteService voteService;
    
    @PostMapping("/vote")
    public String submitVote(@ModelAttribute Vote vote) {
    	System.out.println(vote.getCandidate());
        voteService.submitVote(vote);
        return "redirect:/votingPage";
    }
}