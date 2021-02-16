package com.example.demo.Repository;

import com.example.demo.model.Author;
import com.example.demo.model.Publisher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublisherRepo extends JpaRepository<Publisher, Integer> {
    Publisher findByPublisherNameIgnoreCase(String name);
}
