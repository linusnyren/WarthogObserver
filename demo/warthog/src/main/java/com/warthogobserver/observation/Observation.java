package com.warthogobserver.observation;

import com.warthogobserver.animal.Animal;
import com.warthogobserver.userentity.UserEntity;
import com.warthogobserver.userentity.UserEntityDTO;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Observation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    UserEntity user;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    Animal animal;

    String date;
    private double lng, lat;

}
