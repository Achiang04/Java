package com.glints.librarymanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.glints.librarymanagement.model.Member;

public interface MemberRepo extends JpaRepository<Member, Integer>{
	public Member findById(int id);
}