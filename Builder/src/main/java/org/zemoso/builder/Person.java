package org.zemoso.builder;

/**
 * Person
 */
public class Person {
    private final String firstName;
    private final String lastName;
    private final int age;
    private final String address;

    private Person(Builder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.address = builder.address;
    }

    // Getters for the attributes

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public int getAge() {
        return age;
    }

    public String getAddress() {
        return address;
    }

    public static class Builder {
        private final String firstName;
        private final String lastName;
        private int age;
        private String address;

        /**
         * Mandatory params
         * @param firstName
         * @param lastName
         */
        public Builder(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        /**
         * Optional Parameter
         * @param age
         * @return Builder
         */
        public Builder age(int age) {
            this.age = age;
            return this;
        }

        /**
         * Optional Parameter
         * @param address
         * @return Builder
         */
        public Builder address(String address) {
            this.address = address;
            return this;
        }

        /**
         *builds person object
         * @return Person
         */
        public Person build() {
            return new Person(this);
        }
    }


    @Override
    public String toString() {
        return "Person{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", address='" + address + '\'' +
                '}';
    }
}
