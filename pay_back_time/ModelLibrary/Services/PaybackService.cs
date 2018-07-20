using ModelLibrary.Models;
using ModelLibrary.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessLayer;

namespace ModelLibrary.Services
{
    //This is where we will make our queries to the database
    public class PaybackService : IPaybackService
    {
        public CalendarEventListModel GetAllEvents()
        {
            CalendarEventListModel model = new CalendarEventListModel();

            //need db entity
            using (var db = new Entity())
            {
                var query = db.Events.Select(e => e);
                var eventList = query.ToList();

                eventList.ForEach(calEvt =>
                {
                    var newEvent = new CalendarEventModel()
                    {
                        ID = calEvt.EventID,
                        Title = calEvt.Title,
                        Description = calEvt.Description,
                        Location = calEvt.Location,
                        Date = calEvt.Date,
                        Time = calEvt.Time,
                        ImagePath = calEvt.ImagePath,
                    };
                });
            }

            return model;
        }

        public CalendarEventModel GetEventByID(int id)
        {
            return GetAllEvents().Events.Where(calendarEvt => calendarEvt.ID == id).First();
        }

        public void UpdateEvent(CalendarEventModel model)
        {
            using (var db = new Entity())
            {
                //object in DB
                var newEvent = new CalendarEvent()
                {
                    EventID = model.ID,
                    Title = model.Title,
                    Description = model.Description,
                    Location = model.Location,
                    Date = model.Date,
                    TimeoutException = model.Time,
                    ImagePath = model.ImagePath
                };

                DataAccessLayer.Service.ProjectCRUD.UpdateEvent(newEvent);
            }
        }

        public void AddNewEvent(CalendarEventModel model)
        {
            using (var db = new Entity())
            {
                //object in db
                var newEvent = new CalendarEvent()
                {
                    EventID = model.ID,
                    Title = model.Title,
                    Description = model.Description,
                    Location = model.Location,
                    Date = model.Date,
                    TimeoutException = model.Time,
                    ImagePath = model.ImagePath
                };

                DataAccessLayer.Service.ProjectCRUD.AddEvent(newEvent);
            }
        }

        public CalendarEventListModel GetArchivedEvents()
        {
            //could make new table for archived events and pull there, or filter events here
            throw new NotImplementedException();
        }
    }
}
