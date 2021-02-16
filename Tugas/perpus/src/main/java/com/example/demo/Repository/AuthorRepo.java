package com.example.demo.Repository;

import com.example.demo.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepo extends JpaRepository<Author, Integer> {
    Author findByAuthorNameIgnoreCase(String name);
}
