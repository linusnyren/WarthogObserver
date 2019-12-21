package com.warthogobserver.animal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AnimalController {
    @Autowired
    AnimalService animalService;

    @PostMapping("/rest/animal")
    public ResponseEntity<Animal> addAnimal(@RequestBody Animal animal){
        try {
            return new ResponseEntity<>(animalService.addAnimal(animal), HttpStatus.CREATED);
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/rest/AllAnimals")
    public ResponseEntity<List<Animal>> allAnimals(){
        try{
            return new ResponseEntity<>(animalService.allAnimals(), HttpStatus.OK);
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
