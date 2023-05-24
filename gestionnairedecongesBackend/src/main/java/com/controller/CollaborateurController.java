package com.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")

public class CollaborateurController {

    @RequestMapping("/collaborateur")
    public String hello() {
        return "Page Collaborateur";
    }

}
