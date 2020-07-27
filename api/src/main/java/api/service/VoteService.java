package api.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import api.control.entity.TicketEntity;
import api.control.repository.TicketRepository;

@Service
public class VoteService {

    @Autowired
    
    private TicketRepository dao;

    public TicketEntity save(String type) {
        TicketEntity ticket = new TicketEntity();
        ticket.setType(type);
        ticket.setStatus(false);
        ticket.setInsertDate(new Date());
        return dao.save(ticket);
    }

    public List<TicketEntity> list() {
        List<TicketEntity> list = (List<TicketEntity>) dao.findAll();
        list.sort((a, b) -> Long.compare(a.getInsertDate().getTime(), a.getInsertDate().getTime()));
        for (int i = 0; i < list.size(); i++) {
            list.get(i).setNumber(i);
        }
        return list;
    }

    public TicketEntity call(Integer ticketId, String authorization) throws Exception {
        if(!"5588b2921d6be752d656e61652ac916a".equalsIgnoreCase(authorization)) throw new Exception("Not authorized");
        TicketEntity ticket = findById(ticketId);
        if(null == ticket) throw new Exception("Senha não encontroda");
        ticket.setStatus(true);
        return  dao.save(ticket);
    }

    public TicketEntity findById(Integer id) {
        Optional<TicketEntity> opt = dao.findById(id);
        return opt.orElse(null);
    }
    
    public void delete(String authorization) throws Exception {
        if(!"5588b2921d6be752d656e61652ac916a".equalsIgnoreCase(authorization)) throw new Exception("Not authorized");
        dao.deleteAll();
    }


}
