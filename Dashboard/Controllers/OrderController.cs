using Dashboard.Models;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System;
using System.Linq;

namespace Dashboard.Controllers
{
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly ApiContext _db;

        public OrderController(ApiContext db)
        {
            _db = db;
        }

        // GET: api/order/pageNumber/pageSize
        [HttpGet("{pageIndex:int}/{pageSize:int}")]
        public IActionResult Get(int pageIndex, int pageSize)
        {
            IOrderedQueryable<Order> data = _db.Orders.Include(o => o.Customer).OrderByDescending(c => c.Placed);

            PaginatedResponse<Order> page = new PaginatedResponse<Order>(data, pageIndex, pageSize);

            int totalCount = data.Count();
            double totalPages = Math.Ceiling((double)totalCount / pageSize);

            var response = new
            {
                Page = page,
                TotalPages = totalPages
            };

            return Ok(response);
        }
    }
}
