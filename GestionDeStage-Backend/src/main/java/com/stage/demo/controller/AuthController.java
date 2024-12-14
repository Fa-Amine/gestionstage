package com.stage.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stage.demo.config.JwtProvider;
import com.stage.demo.entities.Stagiaire;
import com.stage.demo.entities.User;
import com.stage.demo.repository.UserRepository;
import com.stage.demo.request.LoginRequest;
import com.stage.demo.response.AuthResponse;
import com.stage.demo.service.CustomerUserServiceImplementation;
import com.stage.demo.service.UserService;



@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CustomerUserServiceImplementation customUserDetails;
	
	@PostMapping("/verify")
	public ResponseEntity verifyUserAuthenticated (@RequestHeader("Authorization") String jwt){
		try {
	        JwtProvider.verifyToken(jwt);
	        Stagiaire stagiaire = userService.getStagiaireProfile(jwt);
	        return new ResponseEntity(stagiaire, HttpStatus.OK);
	    } catch (Exception e) {
	        return new ResponseEntity("Token validation failed: " + e.getMessage(), HttpStatus.UNAUTHORIZED);
	    }
	}
	
	//Post methode for signup dial Stagiaire. ill create the rest later
	@PostMapping("/signupStagiaire")
	public ResponseEntity<AuthResponse> createStagiaireHandler(@RequestBody Stagiaire user) throws Exception{
		
		
		String fullName = user.getNomComplete();
    	String email = user.getEmail();
    	String filiere = user.getFiliere();
    	
    	String n_Etudiant = user.getN_Etudiant();    	
    	String n_telephone = user.getNumeroTelephone();
    	String password = user.getMotDePasse(); 	
    	String role = "ROLE_STAGIAIRE";
    	
    	
    	Stagiaire isEmailExist = userRepository.findByEmail(email);
    	
    	if(isEmailExist != null) {
    		
    		throw new Exception("Email est déja utilisé par un autre compte");
    	}
    	
    	//create new Stagiaire
    	
    	Stagiaire newUser = new Stagiaire();
    	
    	newUser.setEmail(email);
    	newUser.setNomComplete(fullName);
    	newUser.setFiliere(filiere);
    	newUser.setN_Etudiant(n_Etudiant);
    	newUser.setNumeroTelephone(n_telephone);
    	newUser.setRole(role);
    	newUser.setMotDePasse(passwordEncoder.encode(password));
    	
    	Stagiaire savedUser = userRepository.save(newUser);
    	
    	//userRepository.save(savedUser);
    	
    	Authentication authentication = new UsernamePasswordAuthenticationToken(email , password);
    	SecurityContextHolder.getContext().setAuthentication(authentication);
    	
    	String token = JwtProvider.generateToken(authentication);
    	
    	AuthResponse authResponse = new AuthResponse();
    	authResponse.setJwt(token);
    	authResponse.setMessage("Registered Successfully");
    	authResponse.setStatus(true);
    	
    	return new ResponseEntity<>(authResponse , HttpStatus.OK);
    	
	}
	
	
	
	//signin for all users
	 @PostMapping("/login")
	    public ResponseEntity<AuthResponse> signin (@RequestBody LoginRequest loginRequest){
	    	
	    	String username = loginRequest.getEmail();
	    	String password = loginRequest.getPassword();
	    	
	    	System.out.println(username+ " ------- " +password);
	    	
	    	Authentication authentication = authenticate(username , password);
	    	SecurityContextHolder.getContext().setAuthentication(authentication);
	    	
	    	String token = JwtProvider.generateToken(authentication);
	    	AuthResponse authResponse = new AuthResponse();
	    	
	    	authResponse.setMessage("Login Successful");
	    	authResponse.setJwt(token);
	    	authResponse.setStatus(true);
	    	
	    	return new ResponseEntity<>(authResponse , HttpStatus.OK);
	    	
	    	
	    }
	    
	 
	 //authenticate methode to check user and motdepasse
	 private Authentication authenticate(String username, String password) {
	    	
	    	UserDetails userDetails = customUserDetails.loadUserByUsername(username);
	    	
	    	System.out.println("Sign in userDetails - " +userDetails);
	    	
	    	if(userDetails == null) {
	    		System.out.println("Sign in UserDetails - null " + userDetails);
	    		throw new BadCredentialsException("Invalid username or password");
	    	}
	    	
	    	if(!passwordEncoder.matches(password, userDetails.getPassword())) {
	    		System.out.println("sign in userDetails - password not match " +userDetails);
	    		throw new BadCredentialsException("Invalid username or password");
	    	}
	    	
	    	return new UsernamePasswordAuthenticationToken(userDetails, null , userDetails.getAuthorities());
	    	
	    	
	    }
	
	
	

}
