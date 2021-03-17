using Dashboard.Models;

using Microsoft.AspNetCore.Mvc;

using System.Linq;

namespace Dashboard.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private readonly ApiContext _db;

        public CustomerController(ApiContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IOrderedQueryable<Customer> data = _db.Customers.OrderBy(c => c.Id);

            return Ok(data);
        }

        // Get: api/customer/5
        [HttpGet("{id}", Name = "GetCustomer")]
        public IActionResult Get(int id)
        {
            Customer customer = _db.Customers.Find(id);

            return Ok(customer);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Customer customer)
        {
            if (customer == null)
            {
                return BadRequest();
            }

            _db.Customers.Add(customer);
            _db.SaveChanges();

            return CreatedAtRoute("GetCustomer", new { id = customer.Id }, customer);
        }
    }
}
