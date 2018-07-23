using ModelLibrary.Models;
using ModelLibrary.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessLayer;
using ModelLibrary.Concrete;

namespace ModelLibrary.Services
{
    //This is where we will make our queries to the database
    public class PaybackService : IPaybackService
    {
        public CalendarEventListModel GetAllEvents()
        {
            CalendarEventListModel model = new CalendarEventListModel();

            //need db entity
            using (var db = new EFDbContext())
            {
                var query = db.CalendarEvents.Select(e => e);
                var eventList = query.ToList();

                eventList.ForEach(calEvt =>
                {
                    #region DB Model Code
                    //var newEvent = new CalendarEventModel()
                    //{
                    //    EventID = calEvt.EventID,
                    //    Title = calEvt.Title,
                    //    Description = calEvt.Description,
                    //    Location = calEvt.Location,
                    //    Date = calEvt.Date,
                    //    Time = calEvt.Time,
                    //    ImagePath = calEvt.ImagePath,
                    //};
                    #endregion

                    model.Events.Add(calEvt);
                });
            }

            return model;
        }

        public CalendarEventListModel GetArchivedEvents()
        {
            CalendarEventListModel model = new CalendarEventListModel();

            List<CalendarEventModel> allEvents = GetAllEvents().Events;

            DateTime currentDate = DateTime.Now;

            foreach (CalendarEventModel e in allEvents)
            {
                int currMonth = currentDate.Month;
                int eventMonth = e.Date.Month;

                if( Math.Abs(currMonth - eventMonth) > 6)
                {
                    model.Events.Add(e);
                } 
            }

            return model;
        }

        public CalendarEventModel GetEventByID(int id)
        {
            return GetAllEvents().Events.Where(calendarEvt => calendarEvt.EventID == id).First();
        }

        public void UpdateEvent(CalendarEventModel model)
        {
            using (var db = new EFDbContext())
            {
                var eventsList = db.CalendarEvents.ToList();
                var eventToUpdate = db.CalendarEvents.First(x => x.EventID == model.EventID);
                eventToUpdate.Title = model.Title;
                eventToUpdate.Description = model.Description;
                eventToUpdate.Location = model.Location;
                eventToUpdate.Date = model.Date;
                eventToUpdate.Time = model.Time;
                eventToUpdate.ImagePath = model.ImagePath;

                db.SaveChanges();

                #region DB Model Code
                //object in DB
                //var newEvent = new CalendarEvents()
                //{
                //    EventID = model.EventID,
                //    Title = model.Title,
                //    Description = model.Description,
                //    Location = model.Location,
                //    Date = model.Date,
                //    Time = model.Time,
                //    ImagePath = model.ImagePath
                //};

                //DataAccessLayer.Service.ProjectCRUD.UpdateEvent(newEvent);
                #endregion
            }
        }

        public void AddNewEvent(CalendarEventModel model)
        {
            using (var db = new EFDbContext())
            {
                var eventID = db.CalendarEvents.ToList().Last().EventID + 1;
                model.EventID = eventID;

                db.CalendarEvents.Add(model);
                db.SaveChanges();

                #region DB Model Code
                //object in db
                //var newEvent = new CalendarEventModel()
                //{
                //    EventID = model.EventID,
                //    Title = model.Title,
                //    Description = model.Description,
                //    Location = model.Location,
                //    Date = model.Date,
                //    Time = model.Time,
                //    ImagePath = model.ImagePath
                //};

                //DataAccessLayer.Service.ProjectCRUD.AddEvent(newEvent);
                #endregion
            }
        }

        public CalendarEventListModel GetArchivedEvents()
        {
            //could make new table for archived events and pull there, or filter events here
            throw new NotImplementedException();
        }
    }
}
