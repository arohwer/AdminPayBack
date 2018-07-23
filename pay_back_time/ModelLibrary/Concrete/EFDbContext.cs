using ModelLibrary.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLibrary.Concrete
{
    public class EFDbContext : DbContext
    {
        public DbSet<CalendarEventModel> CalendarEvents { get; set; }
    }
}
