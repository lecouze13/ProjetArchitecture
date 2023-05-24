package com.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController

public class ResponsableController {
    
    @RequestMapping("/responsable")
    public String hello() {
        return "Page Responsable";
    }

}
