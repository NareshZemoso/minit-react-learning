package org.zemoso.factory;

public class FactoryMain {

    public static void main(String[] args) {
        OnlineOrderProcessingFactory factory = new OnlineOrderProcessingFactory();

        // Register order processors for different order categories
        factory.registerOrderProcessor("Electronic", new ElectronicOrderProcessor());
        factory.registerOrderProcessor("Clothing", new ClothingOrderProcessor());

        // Create electronic order processor
        OrderProcessor electronicOrderProcessor = factory.createOrderProcessor("Electronic");
        electronicOrderProcessor.processOrder();

        // Create clothing order processor
        OrderProcessor clothingOrderProcessor = factory.createOrderProcessor("Clothing");
        clothingOrderProcessor.processOrder();

        // Add new order processor without modifying the factory or main method
        factory.registerOrderProcessor("Book", new BookOrderProcessor());
        OrderProcessor bookOrderProcessor = factory.createOrderProcessor("Book");
        bookOrderProcessor.processOrder();
    }
}
