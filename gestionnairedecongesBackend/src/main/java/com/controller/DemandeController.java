package com.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")

public class DemandeController {
    
    @RequestMapping("/demande")
    public String hello() {
        return "Page Demande";
    }

}
