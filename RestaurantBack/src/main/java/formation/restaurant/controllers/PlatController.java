package formation.restaurant.controllers;

import formation.restaurant.model.Plat;
import formation.restaurant.model.PlatType;
import formation.restaurant.repositories.PlatRepository;
import formation.restaurant.repositories.PlatTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"}, maxAge = 3600)
public class PlatController {

    @Autowired
    private PlatRepository platRepository;
    private PlatTypeRepository platTypeRepository;

    @RequestMapping(value="/Plats",method = RequestMethod.GET)
    public List<Plat> ListePlats(){return platRepository.findAll();}

    @RequestMapping(value="/PlatTypes",method = RequestMethod.GET)
    public List listePlatTypes(){return platTypeRepository.findAll();}

    @GetMapping(value="/Plats/{id}")
    public Plat getPlat(@PathVariable long id){return platRepository.findById(id).get();}

    @PostMapping(value="/Plats")
    public void addPlat(@RequestBody Plat plat){
        platRepository.save(plat);
    }

    @PutMapping(value = "/Plats")
    public Plat updatePlat(@RequestBody Plat plat) {return platRepository.save(plat);}

    @DeleteMapping(value="/Plats/{id}")
    public void deletePlat(@PathVariable long id){
        platRepository.deleteById(id);
    }
}
