package com.example.Voting.App.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Voting.App.entity.Vote;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    List<Vote> findByCandidate(String candidate);
}
