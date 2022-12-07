package com.azure.ginesSpring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.azure.ginesSpring.model.User;
import com.azure.ginesSpring.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/")
public class UserController {
	@Autowired
	UserService userService;

	@GetMapping("/user")
	public ResponseEntity<List<User>> findAll() {
		List<User> users = this.userService.findAll();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	@PostMapping("/user")
	public ResponseEntity<User> save(@RequestParam(name = "id") int id,
			@RequestParam(name = "firstName") String firstName, @RequestParam(name = "lastName") String lastName,
			@RequestParam(name = "phoneNumber") String phoneNumber, @RequestParam(name = "email") String email) {

		User user = new User(id, firstName, lastName, phoneNumber, email);
		this.userService.save(user);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}
}