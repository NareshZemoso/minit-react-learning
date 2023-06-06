package org.zemoso.singleton;

import java.util.logging.Logger;

/**
 * Main to Test
 */
public class Main {
    public static void main(String[] args) {
        Logger logger=Logger.getLogger(Main.class.getName());
        logger.info("In Main");
         Dependency1 dependency1=new Dependency1();
         Dependency2 dependency2=new Dependency2();

        SingleTonForDriver singleTonForDriver= SingleTonForDriver.getInstance(dependency1,dependency2);

        logger.info(String.valueOf(singleTonForDriver.hashCode()));
        SingleTonForDriver singleTonForDriver2=SingleTonForDriver.getInstance(dependency1,dependency2);
        logger.info(String.valueOf(singleTonForDriver2.hashCode()));


        singleTonForDriver.executeTask();
        }

}