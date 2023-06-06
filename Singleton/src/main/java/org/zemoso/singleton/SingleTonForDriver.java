package org.zemoso.singleton;

/**
 * Singleton Driver
 */
public class SingleTonForDriver {

      private static SingleTonForDriver singleInstance;

    private   Dependency1 dependency1;
    private    Dependency2 dependency2;

    /**
     *
     * @param dependency1
     * @param dependency2
     */
        private SingleTonForDriver(Dependency1 dependency1, Dependency2 dependency2) {
            this.dependency1 = dependency1;
            this.dependency2 = dependency2;

        }

    /**
     * executeTask
     */
    public   void executeTask() {
            // Perform task-specific operations using dependencies
            dependency1.doSomething();
            dependency2.doSomething();

        }

    /**
     * Singleton Pattern is used for driver creation
     * @param dependency1
     * @param dependency2
     * @return SingleTonForDriver
     */
    public static SingleTonForDriver getInstance(Dependency1 dependency1, Dependency2 dependency2) {
        if(null == singleInstance) {
            synchronized(SingleTonForDriver.class) {
                if (null == singleInstance) {

                    singleInstance = new SingleTonForDriver(dependency1, dependency2);
                }
            }
        }
        return singleInstance;
    }
}

