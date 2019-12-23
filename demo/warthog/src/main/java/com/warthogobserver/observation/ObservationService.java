package com.warthogobserver.observation;

import com.warthogobserver.userentity.UserEntity;
import com.warthogobserver.userentity.UserEntityDTO;
import com.warthogobserver.userentity.UserEntityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ObservationService {
    @Autowired
    ObservationRepository observationRepository;
    @Autowired
    UserEntityService userEntityService;

    public Observation addObservation(Observation observation, String phone ) {
        UserEntity userEntity  = userEntityService.getUserByPhone(phone);
        if(userEntity.getFirstName() != null) {
            observation.setUser(userEntity);
            observationRepository.save(observation);
            return observation;
        }
        else{
            return null;
        }
    }

    public List<Observation> allObservations() {
        List<Observation> list = observationRepository.findAll();
        System.out.println(list);
        return observationRepository.findAll();
    }
}
