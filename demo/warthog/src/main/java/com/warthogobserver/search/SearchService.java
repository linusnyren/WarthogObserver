package com.warthogobserver.search;

import com.warthogobserver.observation.Observation;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import java.util.List;

@Service
public class SearchService {
    EntityManager em;

    public List<Observation> search(Search search){
        StringBuilder sb = new StringBuilder();
        sb.append("Select * from Observation where id > 0 ");

        if(search.getAmountHigher() != 0){
            sb.append(" and amount > "+search.getAmountHigher());
        }
        if(search.getAmountLower() != 0){
            sb.append(" and amount < "+search.getAmountLower());
        }
        if(search.getType() != null){
            sb.append(" and type = \""+search.getType()+"\"");
        }
        if(search.getDateAfter() != null){
            sb.append(" and date > "+search.getDateAfter());
        }
        if(search.getDateBefore() != null){
            sb.append(" and date < "+search.getDateBefore());
        }
        System.out.println(sb.toString());
        List<Observation> list = em.createNativeQuery(sb.toString(), Observation.class).getResultList();
        System.out.println(list);
        return (List<Observation>) em.createNativeQuery(sb.toString());
    }
}
