import org.springframework.beans.factory.annotation.Autowired;

import com.stage.demo.entities.Stagiaire;
import com.stage.demo.repository.UserRepository;
import com.stage.demo.service.UserService;

public class maintest {
	
	@Autowired
	private UserService userService;
	
	
	public static void main(String[] args) {
		
		Stagiaire stagiaire = new Stagiaire();
		
		
		
		stagiaire.setNomComplete("saad Boukili");
		stagiaire.setEmail("saadboukili66@gmail.com");
		stagiaire.setMotDePasse("123");
		stagiaire.setRole("ROLE_STAGIAIRE");
		
		stagiaire.setFiliere("INFO");
		stagiaire.setN_Etudiant("C155121");
		stagiaire.setNumeroTelephone("021512121");
		
		
		
		
		//userService.insert(stagiaire);
	}

}
