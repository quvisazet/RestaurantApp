package formation.restaurant.repositories;

import formation.restaurant.model.PlatType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlatTypeRepository extends JpaRepository<PlatType, Long> {
}
