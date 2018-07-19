using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace pay_back_time.Controllers
{
    public class EventCalendarController : Controller
    {
        IPaybackService service = new PaybackService();

        public ActionResult Index()
        {
            //get all events and send to view to display
            return View();
        }

        [Authorize(Roles = "Admin")]
        public ActionResult EventList()
        {
            //get all events and send to view to display
            //edit/delete/add options will be displayed for admin role
            return View();
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
            //get event model from form and pass to service to persist to JSON

            return RedirectToAction("EventList");
        }

        [Authorize(Roles = "Admin")]
        public ActionResult EditEvent(int id)
        {
            //pass in event model to edit
            //grab event and pass to editing view
            return View();
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public ActionResult EditEventSave(CalendarEventModel e)
        {
            if (Request.Form["update"] != null)
            {
                //update event (overwrite JSON)
            }
            else
            {
                //delete event (empty/re-write array)
            }
            return RedirectToAction("EventList");
        }
    }
}