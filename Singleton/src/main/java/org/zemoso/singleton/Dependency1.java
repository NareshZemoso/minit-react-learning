package org.zemoso.singleton;

import java.util.logging.Logger;

/**
 * Dependency1 for driver
 */
public class Dependency1 {
    Logger logger=Logger.getLogger(Dependency1.class.getName());
    public void doSomething() {
        logger.info("Dependency1");
    }
}
