using Dashboard.Models;

using System;
using System.Collections.Generic;
using System.Linq;

namespace Dashboard
{
    public class DataSeed
    {
        private readonly ApiContext _ctx;

        public DataSeed(ApiContext ctx)
        {
            _ctx = ctx;
        }

        /// <summary>
        /// Заповнення даних.
        /// </summary>
        /// <param name="nCustomers"> Кількість клієнтів. </param>
        /// <param name="nOrders"> Кількість замовлень. </param>
        public void SeedData(int nCustomers, int nOrders)
        {
            if (!_ctx.Customers.Any())
            {
                SeedCustomers(nCustomers);
                _ctx.SaveChanges();
            }
            if (!_ctx.Orders.Any())
            {
                SeedOrders(nOrders);
                _ctx.SaveChanges();
            }
            if (!_ctx.Servers.Any())
            {
                SeedServers();
                _ctx.SaveChanges();
            }
        }

        private void SeedServers()
        {
            foreach (Server server in BuildServerList())
            {
                _ctx.Servers.Add(server);
            }
        }

        private List<Server> BuildServerList()
        {
            return new List<Server>()
                {
                    new Server
                    {
                        Id = 1,
                        Name = "Dev-Web",
                        IsOnline = true
                    },
                    new Server
                    {
                        Id = 2,
                        Name = "Dev-Mail",
                        IsOnline = false
                    },
                    new Server
                    {
                        Id = 3,
                        Name = "Dev-Services",
                        IsOnline = true
                    },
                    new Server
                    {
                        Id = 4,
                        Name = "QA-Web",
                        IsOnline = true
                    },
                    new Server
                    {
                        Id = 5,
                        Name = "QA-Mail",
                        IsOnline = false
                    },
                    new Server
                    {
                        Id = 6,
                        Name = "QA-Services",
                        IsOnline = true
                    },
                    new Server
                    {
                        Id = 7,
                        Name = "Prod-Web",
                        IsOnline = true
                    },
                    new Server
                    {
                        Id = 8,
                        Name = "Prod-Mail",
                        IsOnline = true
                    },
                    new Server
                    {
                        Id = 9,
                        Name = "Prod-Services",
                        IsOnline = true
                    }
                };
        }

        private void SeedOrders(int n)
        {
            foreach (Order order in BuildOrderList(n))
            {
                _ctx.Orders.Add(order);
            }
        }

        private List<Order> BuildOrderList(int nOrders)
        {
            List<Order> orders = new List<Order>();

            Random rand = new Random();

            for (int i = 1; i <= nOrders; i++)
            {
                int randCustomerId = rand.Next(1, _ctx.Customers.Count());
                DateTime placed = Helpers.GetRandomOrderPlaced();
                DateTime? complete = Helpers.GetRandomOrderComplete(placed);

                List<Customer> customers = _ctx.Customers.ToList();

                orders.Add(new Order
                {
                    Id = i,
                    Customer = customers.First(c => c.Id == randCustomerId),
                    OrderTotal = Helpers.GetRandomOrderTotal(),
                    Placed = placed,
                    Complete = complete
                });
            }

            return orders;
        }

        /// <summary>
        /// Заповнити початкові дані.
        /// </summary>
        /// <param name="n"> Кількість записів. </param>
        private void SeedCustomers(int n)
        {
            foreach (Customer customer in BuildCustomerList(n))
            {
                _ctx.Customers.Add(customer);
            }
        }

        private static List<Customer> BuildCustomerList(int nCustomers)
        {
            List<Customer> customers = new List<Customer>();

            List<string> names = new List<string>();

            for (int i = 1; i <= nCustomers; i++)
            {
                string name = Helpers.MakeUniqueCustomerName(names);
                names.Add(name);

                customers.Add(new Customer
                {
                    Id = i,
                    Name = name,
                    Email = Helpers.MakeCustomerEmail(name),
                    State = Helpers.GetRandomState()
                });
            }

            return customers;
        }
    }
}