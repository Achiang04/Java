package com.glints.librarymanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.glints.librarymanagement.model.Petugas;

public interface PetugasRepo extends JpaRepository<Petugas, Integer>{
	public Petugas findByNamaIgnoreCase(String nama);
}
