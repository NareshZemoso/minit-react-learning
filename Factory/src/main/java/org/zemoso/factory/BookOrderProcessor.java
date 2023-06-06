package org.zemoso.factory;

import java.util.logging.Logger;

public class BookOrderProcessor implements OrderProcessor{

    Logger logger=Logger.getLogger(BookOrderProcessor.class.getName());
    @Override
    public void processOrder() {
        logger.info("Processing book order...");
    }
}
