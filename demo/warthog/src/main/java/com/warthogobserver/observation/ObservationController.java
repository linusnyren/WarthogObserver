package com.warthogobserver.observation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ObservationController {

    @Autowired
    ObservationService observationService;

    @PostMapping("/rest/observation/{userid}")
    ResponseEntity<Observation> addObservation(@RequestBody Observation observation, @PathVariable long userid){
        try{
            return new ResponseEntity<>(observationService.addObservation(observation, userid), HttpStatus.CREATED);
        }
        catch(Exception e){
            System.out.println(e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/rest/observation")
    ResponseEntity<List<Observation>> allObservations(){
        try{
            return new ResponseEntity<>(observationService.allObservations(), HttpStatus.OK);
        }
        catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
