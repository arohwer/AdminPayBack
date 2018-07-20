using ModelLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLibrary.Services
{
    public interface IPaybackService
    {
        //could also return lists of filtered events; i.e., current events, past events, upcoming events
        CalendarEventListModel GetAllEvents();
        CalendarEventModel GetEventByID(int id);
    }
}
