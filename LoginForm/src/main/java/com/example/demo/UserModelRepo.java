package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UserModelRepo extends JpaRepository<UserModel, Long>
{
	@Query(value = "select username from user_model where email=:email", nativeQuery = true)
	public String search(@Param("email")String email);
}
