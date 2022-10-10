package org.softwire.training.api.core;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class MessageProcessorTest {

    private final MessageProcessor messageProcessor = new MessageProcessor("dev");

    @Test
    public void encodeModifiesMessage() {
        String input = "Some test message! :)";
        String encoded = messageProcessor.encode(input);
        assertNotEquals(input, encoded);
    }

    @Test
    public void decodeModifiesMessage() {
        String input = "Some test message! :)";
        String decode = messageProcessor.decode(input);
        assertNotEquals(input, decode);
    }

    @Test
    public void encodeAndDecodeRoundTrip() throws Exception {
        AesEncryption aes_encryption = new AesEncryption();
        aes_encryption.init();

        String input = "hello";
        String encoded = aes_encryption.encrypt(input);
        String decoded = aes_encryption.decrypt(encoded);
        assertEquals(input, decoded);
    }
}
