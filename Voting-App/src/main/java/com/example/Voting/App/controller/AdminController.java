package com.example.Voting.App.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Voting.App.entity.Vote;
import com.example.Voting.App.service.VoteService;

@RestController
public class AdminController {
    @Autowired
    private VoteService voteService;

    @PostMapping("/admin/dashboard")
    public String adminDashboard(Model model) {
        List<Vote> candidate1Votes = voteService.getVotesByCandidate("candidate1");
        List<Vote> candidate2Votes = voteService.getVotesByCandidate("candidate2");
        List<Vote> candidate3Votes = voteService.getVotesByCandidate("candidate3");
        List<Vote> candidate4Votes = voteService.getVotesByCandidate("candidate4");

        model.addAttribute("candidate1Votes", candidate1Votes.size());
        model.addAttribute("candidate2Votes", candidate2Votes.size());
        model.addAttribute("candidate3Votes", candidate3Votes.size());
        model.addAttribute("candidate4Votes", candidate4Votes.size());

        return "admin/dashboard";
    }
}
