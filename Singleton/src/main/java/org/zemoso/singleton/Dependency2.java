package org.zemoso.singleton;

import java.util.logging.Logger;

/**
 * Dependency2 for driver
 */
public class Dependency2 {
    Logger logger=Logger.getLogger(Dependency2.class.getName());
    public void doSomething() {
        logger.info("Dependency2");
    }
}
