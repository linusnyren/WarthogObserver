package com.warthogobserver.animal;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Animal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String type;
    private int age;
}
