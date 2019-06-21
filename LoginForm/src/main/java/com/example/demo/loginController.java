package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:4200")
@EnableAutoConfiguration
@RestController
public class loginController {
	@Autowired
	UserModelRepo repo;
	@GetMapping("/signup/{username}/{Password}/{email}")
	public int signup(@PathVariable String username,@PathVariable String Password,@PathVariable String email)
	{
		UserModel user = new UserModel();
		user.setUsername(username);
		user.setPassword(Password);
		user.setEmail(email);
		repo.save(user);
		return 1;
	}
	@GetMapping("/search/{Password}/{email}")
	public int  login(@PathVariable String Password,@PathVariable String email)
	{
		System.out.println(email);
		UserModel user = new UserModel();
		String s=null;
		s=repo.search(Password);
		System.out.println(s);
		if(s==null)
		  return 0;
		else
			return 1;
	}
	
}
