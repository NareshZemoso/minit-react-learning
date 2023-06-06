package org.zemoso.factory;

import java.util.logging.Logger;

/**
 * Electronic order processor
 */
public class ElectronicOrderProcessor implements OrderProcessor{
    Logger logger=Logger.getLogger(ElectronicOrderProcessor.class.getName());

    /**
     * Process order
     */
    @Override
    public void processOrder() {
        logger.info("Processing electronic order...");
        // Perform electronic order processing logic
    }
}
