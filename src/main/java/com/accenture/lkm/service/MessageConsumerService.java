package com.accenture.lkm.service;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MessageConsumerService {

    private List<String> messages = new ArrayList<>();

    @RabbitListener(queues = "myQueue")
    public void consumeMessage(String message) {
        messages.add(message);
    }

    public List<String> getAllMessages() {
        return new ArrayList<>(messages);
    }

    public void removeMessage(String message) {
        messages.remove(message);
    }
}