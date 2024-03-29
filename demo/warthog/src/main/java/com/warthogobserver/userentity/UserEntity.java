package com.warthogobserver.userentity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class UserEntity {

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

   private String surName, firstName, phone, mail;
}
