package org.softwire.training.api.core;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

public class MessageProcessorTest {

    private final MessageProcessor messageProcessor = new MessageProcessor("dev");

    @Test
    public void encodeModifiesMessage() throws Exception {
        AesEncryption aes_encryption = new AesEncryption();
        aes_encryption.init();

        String input = "Some test message! :)";
        String encoded = aes_encryption.encrypt(input);
        assertNotEquals(input, encoded);
    }

    // @Test
    // public void decodeModifiesMessage() throws Exception {
    //     AesEncryption aes_encryption = new AesEncryption();
    //     aes_encryption.init();

    //     String input = "Some test message! :)";
    //     String decode = aes_encryption.decrypt(input);
    //     assertNotEquals(input, decode);
    // }

    @Test
    public void encodeAndDecodeRoundTrip() throws Exception {
        AesEncryption aes_encryption = new AesEncryption();
        aes_encryption.init();

        String input = "hello";
        String encoded = aes_encryption.encrypt(input);
        System.out.println(encoded);
        System.out.println(encoded);
        String decoded = aes_encryption.decrypt(encoded);
        System.out.println(decoded);
        assertEquals(input, decoded);
    }
}
