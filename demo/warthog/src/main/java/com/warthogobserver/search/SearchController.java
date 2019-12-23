package com.warthogobserver.search;

import com.warthogobserver.observation.Observation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SearchController {

    @Autowired
    SearchService searchService;

    @PostMapping("rest/search")
    List<Observation> serach(@RequestBody Search search){
        System.out.println(search);
        return searchService.search(search);
    }
}
