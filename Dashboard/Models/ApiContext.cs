using Microsoft.EntityFrameworkCore;

namespace Dashboard.Models
{
    public class ApiContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Server> Servers { get; set; }

        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }
    }
}