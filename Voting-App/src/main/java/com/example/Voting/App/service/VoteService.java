package com.example.Voting.App.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.Voting.App.entity.Vote;
import com.example.Voting.App.repository.VoteRepository;
@Service
public class VoteService {
    @Autowired
    private VoteRepository voteRepository;
    
    public void submitVote(Vote vote) {
        voteRepository.save(vote);
    }
    
    public List<Vote> getVotesByCandidate(String candidate) {
        return voteRepository.findByCandidate(candidate);
    }
}
