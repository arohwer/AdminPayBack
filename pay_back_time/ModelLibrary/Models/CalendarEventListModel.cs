using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLibrary.Models
{
    public class CalendarEventListModel
    {
        public List<CalendarEventModel> Events { get; set; }

        public CalendarEventListModel()
        {
            Events = new List<CalendarEventModel>();
        }
    }
}
