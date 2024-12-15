import org.springframework.beans.factory.annotation.Autowired;

import com.stage.demo.model.Stagiaire;
import com.stage.demo.repository.UserRepository;
import com.stage.demo.service.UserService;


public class maintest {
	
	@Autowired
	private static UserRepository userRepository;
	
	
	public static void main(String[] args) {
		
		Stagiaire stagiaire = new Stagiaire();
		
		
		
		stagiaire.setNomComplete("hamid settar");
		stagiaire.setEmail("hamid@gmail.com");
		stagiaire.setMotDePasse("122");
		stagiaire.setRole("ROLE_STAGIAIRE");
		
		stagiaire.setFiliere("INFO");
		stagiaire.setN_Etudiant("C155121");
		stagiaire.setNumeroTelephone("021512121");
		
		
		userRepository.save(stagiaire);
		
	
	}

}
