package com.warthogobserver.userentity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface UserEntityRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findById(long id);
}
