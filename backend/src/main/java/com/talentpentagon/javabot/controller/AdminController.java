package com.talentpentagon.javabot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.talentpentagon.javabot.commandhandlers.NewTeamCommandHandler;
import com.talentpentagon.javabot.model.Team;
import com.talentpentagon.javabot.service.TeamService;

@RestController
public class AdminController {
    
    @Autowired
    TeamService teamService;

    @Autowired
    NewTeamCommandHandler newTeamCommandHandler;
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PreAuthorize("hasRole('Notch')")
    @PostMapping("team")
    public ResponseEntity<Team> postTeam(@RequestBody Team teamBody) {
        return newTeamCommandHandler.execute(teamBody);
    }

}