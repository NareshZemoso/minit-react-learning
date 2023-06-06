package org.zemoso.factory;

import java.util.HashMap;
import java.util.Map;

/**
 * OnlineOrderProcessingFactory
 * registers and creates order processors
 *
 */
public class OnlineOrderProcessingFactory {
    /**
     * Map of order processors
     */

    private Map<String, OrderProcessor> orderProcessors;

    public OnlineOrderProcessingFactory() {
        orderProcessors = new HashMap<>();
    }

    /**
     * registers order processors
     * @param orderCategory
     * @param orderProcessor
     */
    public void registerOrderProcessor(String orderCategory, OrderProcessor orderProcessor) {
        orderProcessors.put(orderCategory, orderProcessor);
    }

    /**
     * creates order processor
     * @param orderCategory
     * @return OrderProcessor
     */
    public OrderProcessor createOrderProcessor(String orderCategory) {
        OrderProcessor orderProcessor = orderProcessors.get(orderCategory);
        if (orderProcessor == null) {
            throw new IllegalArgumentException("Invalid order category: " + orderCategory);
        }
        return orderProcessor;
    }
}
