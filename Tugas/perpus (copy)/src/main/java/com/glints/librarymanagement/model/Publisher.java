package com.glints.librarymanagement.model;

import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.*;

@Entity
@Table(name = "publisher")
@SQLDelete(sql =
        "UPDATE book " +
                "SET deleted = true " +
                "WHERE book_id = ?")
@Where(clause = "deleted = false")
public class Publisher {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long publisher_id;

    @Column(name = "publisher_name")
    private String publisherName;

    private boolean deleted;

    public Publisher() {}

    public Publisher(String publisher_name) {
        this.publisherName = publisher_name;
    }

    public Long getPublisher_id() {
        return publisher_id;
    }

    public void setPublisher_id(Long publisher_id) {
        this.publisher_id = publisher_id;
    }

    public String getPublisherName() {
        return publisherName;
    }

    public void setPublisherName(String publisherName) {
        this.publisherName = publisherName;
    }
}
