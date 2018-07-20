using System;
using System.Collections.Generic;
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
            //get all events and send to view to display
            CalendarEventListModel model = service.GetAllEvents();
            ViewBag.Heading = "Event Calendar";
            return View(model);
        }

        [Authorize(Roles = "Admin")]
        public ActionResult EventList()
        {
            //get all events and send to view to display
            //edit/add options will be displayed for admin role
            CalendarEventListModel model = service.GetAllEvents();
            return View(model);
        }

        [Authorize(Roles = "Admin")]
        public ActionResult AddNewEvent()
        {
            return View();
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult AddProductSave(CalendarEventModel e)
        {
            //get event model from form and pass to service to persist to db
            ((PaybackService)service).AddNewEvent(e);
            return RedirectToAction("EventList");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult EditEvent(int id)
        {
            //pass in event model to edit
            //grab event and pass to editing view
            CalendarEventListModel modelList = service.GetAllEvents();
            var eventToEdit = modelList.Events.Where(x => x.ID == id).First();
            return View(eventToEdit);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult EditEventSave(CalendarEventModel e)
        {
            if (Request.Form["update"] != null)
            {
                ((PaybackService)service).UpdateEvent(e);
            }
            return RedirectToAction("EventList");
        }
    }
}