package com.warthogobserver.search;

import com.warthogobserver.observation.Observation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class SearchController {

    @Autowired
    SearchService searchService;

    @PostMapping("rest/search")
    List<Observation> serach(@RequestBody Search search){
        System.out.println(search);
        return searchService.search(search);
    }
}
