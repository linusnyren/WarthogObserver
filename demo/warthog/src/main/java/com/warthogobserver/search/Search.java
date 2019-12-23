package com.warthogobserver.search;

import lombok.Data;

@Data
public class Search {
    private String type,  dateBefore, dateAfter;
    private int amountHigher, amountLower;
}
