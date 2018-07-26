using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ModelLibrary.Models;
using ModelLibrary.Services;

namespace pay_back_time.Controllers
{
    public class EventCalendarController : Controller
    {
        IPaybackService service = new PaybackService();

        public ActionResult Index()
        {
            //get all upcoming events and send to view to display
            CalendarEventListModel upcoming = service.GetUpcomingEvents();

            ViewBag.Heading = "Event Calendar";
            return View(upcoming);
        }

        [Authorize(Roles = "Admin")]
        public ActionResult AdminEventList()
        {
            //get all events and send to view to display
            //edit/add options will be displayed for admin role
            //archived events will also be displayed w/ button redirecting to ArchivedEventList()
            CalendarEventListModel model = service.GetAllEvents();
            return View(model);
        }

        [Authorize(Roles = "Admin")]
        public ActionResult ArchivedEventList()
        {
            //get all archived events and send to view to display
            //edit/add options will be displayed for admin role
            //current events will also be displayed w/ button redirecting to EventList()
            CalendarEventListModel model = service.GetArchivedEvents();
            return View(model);
        }

        public ActionResult SearchResults(string searchQuery)
        {
            CalendarEventListModel model = service.GetAllEvents();
            CalendarEventListModel eventResults = new CalendarEventListModel();
            if (!string.IsNullOrEmpty(searchQuery))
            {
                string upper = searchQuery.First().ToString().ToUpper() + searchQuery.Substring(1);
                var results = model.Events.Where(s => s.Title.Contains(searchQuery) || s.Title.Contains(upper) ||
                s.Date.ToString().Contains(searchQuery) || s.Date.ToString().Contains(upper) ||
                s.Location.ToString().Contains(searchQuery) || s.Location.ToString().Contains(upper)).ToList();

                if (results.Count != 0)
                {
                    foreach (var e in results)
                    {
                        eventResults.Events.Add(e);
                    }
                }
                else
                {
                    ViewBag.Heading = "Search Results";
                    return View("NoEventsFound");
                }
            }
            else
            {
                ViewBag.Heading = "Search Results";
                return View("NoEventsFound");
            }

            ViewBag.Heading = "Search Results";
            return View("Index", eventResults);
        }

        public ActionResult NoEventsFound()
        {
            return View();
        }

        public ActionResult EventDetail(int id)
        {
            CalendarEventModel model = service.GetEventByID(id);
            return View(model);
        }

        [Authorize(Roles = "Admin")]
        public ActionResult AddNewEvent()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult AddEventSave(CalendarEventModel e)
        {
            //get event model from form and pass to service to persist to db
            if (ModelState.IsValid)
            {
                if (e.UploadedFile != null)
                {
                    Console.WriteLine(e.ImagePath);
                    e.UploadedFile.SaveAs(Path.Combine("~/Images/", e.ImagePath.Replace(" ", string.Empty) + ".jpg"));
                }
                ((PaybackService)service).AddNewEvent(e);
            }
            return RedirectToAction("EventList");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult EditEvent(int id)
        {
            //pass in event model to edit
            //grab event and pass to editing view
            CalendarEventListModel modelList = service.GetAllEvents();
            var eventToEdit = modelList.Events.Where(x => x.EventID == id).First();
            return View(eventToEdit);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult EditEventSave(CalendarEventModel e)
        {
            if (Request.Form["update"] != null && ModelState.IsValid)
            {
                if (e.UploadedFile != null)
                {
                    e.UploadedFile.SaveAs(Path.Combine("~/Images/", e.ImagePath.Replace(" ", string.Empty) + ".jpg"));
                }
                ((PaybackService)service).UpdateEvent(e);
            }
            return RedirectToAction("EventList");
        }
    }
}