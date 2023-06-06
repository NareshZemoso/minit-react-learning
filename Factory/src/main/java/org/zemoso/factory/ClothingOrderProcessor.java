package org.zemoso.factory;

import java.util.logging.Logger;

public class ClothingOrderProcessor implements OrderProcessor{
    Logger logger=Logger.getLogger(ClothingOrderProcessor.class.getName());

    /**
     * Processs order
     */
    @Override
    public void processOrder() {

        logger.info("Processing clothing order...");
    }
}
