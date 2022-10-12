package org.softwire.training.api.core;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class MessageProcessorTest {

    private final MessageProcessor messageProcessor = new MessageProcessor("dev");

    @Test
    public void encodeModifiesMessage() {
        key key = new key();
        key.generateKey();

        String input = "Some test message! :)";
        String encoded = messageProcessor.encode(input, key.getKey());
        assertNotEquals(input, encoded);
    }

    @Test
    public void decodeModifiesMessage() {
        key key = new key();
        key.generateKey();

        String input = "Some test message! :)";
        String decode = messageProcessor.decode(input, key.getKey());
        assertNotEquals(input, decode);
    }

    @Test
    public void encodeAndDecodeRoundTrip() {
        key key = new key();
        key.generateKey();

        String input = "hello";
        String encoded = messageProcessor.encode(input, key.getKey());
        String decoded = messageProcessor.decode(encoded, key.getKey());
        assertEquals(input, decoded);
    }
}
