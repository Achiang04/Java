package com.glints.librarymanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.glints.librarymanagement.model.Borrowing;

public interface BorrowingRepo extends JpaRepository<Borrowing, String> {

}
