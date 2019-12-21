package com.warthogobserver.userentity;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserEntityService userEntityService;

    @PostMapping("/rest/user")
    public ResponseEntity<UserEntity> addUser(@RequestBody UserEntity userEntity){
        try{
            return new ResponseEntity<>(userEntityService.addUser(userEntity), HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}
