package com.warthogobserver.userentity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserEntityService {
    @Autowired
    UserEntityRepository userEntityRepository;


    public UserEntity addUser(UserEntity userEntity) {
        userEntityRepository.save(userEntity);
        return userEntity;
    }

    public UserEntity getUser(long userid) {
        return userEntityRepository.findById(userid);
    }

    public UserEntity getUserByPhone(String phone) {
        return userEntityRepository.findByPhone(phone);
    }
}
