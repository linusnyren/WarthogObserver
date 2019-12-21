package com.warthogobserver.userentity;

public class UserEntityDTO extends UserEntity {

    private String surName, firstName;
    public UserEntityDTO(UserEntity userEntity){
        this.surName = userEntity.getSurName();
        this.firstName = userEntity.getFirstName();
    }
}
