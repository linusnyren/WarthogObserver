package com.warthogobserver.animal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalService {
    @Autowired
    AnimalRepository animalRepository;
    public Animal addAnimal(Animal animal) {
        animalRepository.save(animal);
        return animal;
    }
    public List<Animal> allAnimals(){
        return animalRepository.findAll();
    }
}
