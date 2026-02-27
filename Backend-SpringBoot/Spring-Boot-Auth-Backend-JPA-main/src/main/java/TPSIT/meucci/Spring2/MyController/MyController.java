package TPSIT.meucci.Spring2.MyController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TPSIT.meucci.Spring2.model.Persona;
import TPSIT.meucci.Spring2.repository.PersonaRepository;

@RestController
@RequestMapping("/")
public class MyController {

    @Autowired
    PersonaRepository personaRepository;

    @PostMapping("/login")
    public String login(@RequestBody Persona p) {

        if (personaRepository.find(p)) {
            return "{'valid': 'true'}";
        } else {
            return "{'valid': 'false'}";
        }
    }

    @PostMapping("/register")
    public Persona register(@RequestBody Persona p) {
        return personaRepository.save(p);
    }

}
