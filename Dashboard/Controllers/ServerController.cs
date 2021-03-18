using Dashboard.Models;

using Microsoft.AspNetCore.Mvc;

using System.Collections.Generic;
using System.Linq;

namespace Dashboard.Controllers
{
    [Route("api/[controller]")]
    public class ServerController : Controller
    {
        private readonly ApiContext _db;

        public ServerController(ApiContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<Server> response = _db.Servers.OrderBy(s => s.Id).ToList();

            return Ok(response);
        }

        [HttpGet("{id}", Name = "GetServer")]
        public IActionResult Get(int id)
        {
            Server response = _db.Servers.Find(id);

            return Ok(response);
        }

        [HttpPut("{id}")]
        public IActionResult Message(int id, [FromBody] ServerMessage msg)
        {
            Server server = _db.Servers.Find(id);

            if (server == null)
            {
                return NotFound();
            }

            // Refactor: move into a service
            if (msg.Payload == "activate")
            {
                server.IsOnline = true;
            }

            if (msg.Payload == "deactivate")
            {
                server.IsOnline = false;
            }
            _db.SaveChanges();

            return new NoContentResult();
        }
    }
}
