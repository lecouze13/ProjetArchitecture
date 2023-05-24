package com.controller;

// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// @CrossOrigin(origins = "*")
@RestController

public class LoginController {

    @RequestMapping("/login")
    public String hello() {
        return "Page Login";
    }

    

}
