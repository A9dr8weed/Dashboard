using Dashboard.Models;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using System;
using System.Collections.Generic;
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

        [HttpGet("ByState")]
        public IActionResult ByState()
        {
            // Отримуємо всі Orders
            List<Order> orders = _db.Orders.Include(o => o.Customer).ToList();

            var groupedResult = orders
                .GroupBy(o => o.Customer.State)
                .ToList()
                .Select(grp => new { State = grp.Key, OrderTotal = grp.Sum(x => x.OrderTotal) })
                .OrderByDescending(res => res.OrderTotal)
                .ToList();

            return Ok(groupedResult);
        }

        [HttpGet("ByCustomer/{n}")]
        public IActionResult ByCustomer(int n)
        {
            // Отримуємо всі Orders
            List<Order> orders = _db.Orders.Include(o => o.Customer).ToList();

            var groupedResult = orders.GroupBy(o => o.Customer.Id)
                .ToList()
                .Select(grp => new
                {
                    Name = _db.Customers.Find(grp.Key).Name,
                    OrderTotal = grp.Sum(x => x.OrderTotal)
                })
                .OrderByDescending(res => res.OrderTotal)
                .Take(n)
                .ToList();

            return Ok(groupedResult);
        }

        [HttpGet("GetOrder/{}", Name = "GetOrder")]
        public IActionResult GetOrder(int id)
        {
            Order order = _db.Orders.Include(o => o.Customer).First(o => o.Id == id);

            return Ok(order);
        }
    }
}
