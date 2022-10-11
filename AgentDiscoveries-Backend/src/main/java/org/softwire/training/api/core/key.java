package org.softwire.training.api.core;

import java.util.concurrent.ThreadLocalRandom;

public class key {
    private int[] key;

    public void generateKey() {
        int[] key = new int[5];
        for (int i = 0; i< key.length; i++) {
            key[i] = ThreadLocalRandom.current().nextInt(1, 10);
        }
        this.key = key;
    }

    public int[] getKey() {
        return key;
    }
    
}
