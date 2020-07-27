package api.control.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import api.control.entity.TicketEntity;

public interface TicketRepository extends CrudRepository<TicketEntity, Integer> {

    List<TicketEntity> findAllByStatus (boolean status);
}
