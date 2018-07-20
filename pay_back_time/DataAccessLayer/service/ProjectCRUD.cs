using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Service
{
    public class ProjectCRUD
    {
        public static void AddEvent(CalendarEvent e)
        {
            using (var db = new Entity())
            {
                var eventID = db.Events.ToList().Last().EventID + 1;
                var newEvent = new CalendarEvent()
                {
                    EventID = eventID,
                    Title = e.Title,
                    Description = e.Description,
                    Location = e.Location,
                    Date = e.Date,
                    Time = e.Time,
                    ImagePath = e.ImagePath
                };
                
                db.Events.Add(newEvent);
                db.SaveChanges();
            }
        }

        public static void UpdateEvent(CalendarEvent e)
        {
            using (var db = new Entity())
            {
                var eventsList = db.Events.ToList();
                var eventToUpdate = db.Events.First(x => x.EventID == e.EventID);
                eventToUpdate.Title = e.Title;
                eventToUpdate.Description = e.Description;
                eventToUpdate.Location = e.Location;
                eventToUpdate.Date = e.Date;
                eventToUpdate.Time = e.Time;
                eventToUpdate.ImagePath = e.ImagePath;

                db.SaveChanges();
            }
        }
    }
}
