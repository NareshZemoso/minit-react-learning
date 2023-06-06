package org.zemoso.builder;

import java.util.logging.Logger;

/**
 * Builder test class
 */
public class BuilderMain {
  private static final Logger logger=Logger.getLogger(BuilderMain.class.getName());
    public static void main(String[] args) {
        Person person = new Person.Builder("Naresh", "Chinturi")
                .age(30)
                .address("123 hyderabad")
                .build();
        logger.info(String.valueOf(person));

    }
}
