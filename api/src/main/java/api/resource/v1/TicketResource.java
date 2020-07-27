package api.resource.v1;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import api.control.entity.TicketEntity;
import api.service.VoteService;

@Controller
@RequestMapping(value = "/v1/ticket")
public class TicketResource {

    @Autowired
    private VoteService service;

    @ResponseBody
    @Transactional(rollbackOn = Throwable.class)
    @RequestMapping(value = "", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<TicketEntity> save(@RequestParam String type) {
        return ResponseEntity.ok(service.save(type));
    }

    @ResponseBody
    @Transactional(rollbackOn = Throwable.class)
    @RequestMapping(value = "", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity<List<TicketEntity>> list() {
        return ResponseEntity.ok(service.list());
    }

    @ResponseBody
    @Transactional(rollbackOn = Throwable.class)
    @RequestMapping(value = "/call", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<TicketEntity> call(@RequestParam Integer ticketId, HttpServletRequest request) throws Exception {
        System.out.println(request.getHeader("Authorization"));
        return ResponseEntity.ok(service.call(ticketId, request.getHeader("Authorization")));
    }

    @ResponseBody
    @Transactional(rollbackOn = Throwable.class)
    @RequestMapping(value = "", method = RequestMethod.DELETE, produces = "application/json")
    public ResponseEntity<String> delete(HttpServletRequest request) throws Exception {
        service.delete(request.getHeader("Authorization"));
        return ResponseEntity.ok("OK");
    }
    
}
