using ModelLibrary.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ModelLibrary.services;

namespace pay_back_time.Controllers
{
    public class ApplyController : Controller
    {
        IPaybackService service = new PaybackService();
        // GET: Apply
        public ActionResult Apply()
        {
            return View();
        }

            if (ModelState.IsValid)
            {
                service.CreateUserApplication(model);
                return RedirectToAction("ApplySuccess", model);
            }
            else
            {
                return View(model);
            }
            //service.CreateUserApplication(model);

        }


        public ActionResult ApplySuccess(ApplicationModel model)
        {
            ViewBag.name = model.Name;
            ViewBag.email = model.Email;
            return View();
        }

        public ActionResult Applications()
        {
            ViewBag.noResults = "No new applications.";
            return View(service.GetNonReviewedApplications());
        }

        public ActionResult ReviewedApplications()
        {
            ViewBag.noResults = "No reviewed applications.";
            return View("Applications", service.GetReviewedApplications());
        }

        public ActionResult SavedApplications()
        {
            ViewBag.noResults = "No saved applications.";
            return View("Applications", service.GetSavedApplications());
        }
        public ActionResult ArchivedApplications()
        {
            ViewBag.noResults = "No archived applications.";
            return View("Applications", service.GetArchivedApplications());
        }


        public ActionResult Viewed()
        {
            string temp = Request.QueryString["applicationID"];
            int x;
            if (Int32.TryParse(temp, out x))
            {
                x = Int32.Parse(temp);

                service.ViewApplicationByID(x);
            };
            return new EmptyResult();
        }

        //[Authorize(Roles ="Admin")]

        public ActionResult Saved()
        {
            string temp = Request.QueryString["applicationID"];
            int x;
            if (Int32.TryParse(temp, out x))
            {
                x = Int32.Parse(temp);

                service.InvertSaveApplicationByID(x);
            };
            return new EmptyResult();
        }

        //[Authorize(Roles ="Admin")]

        public ActionResult Archived()
        {
            string temp = Request.QueryString["applicationID"];
            int x;
            if (Int32.TryParse(temp, out x))
            {
                x = Int32.Parse(temp);

                service.InvertArchiveApplicationByID(x);
            };
            return new EmptyResult();
        }

        //[Authorize(Roles ="Admin")]

        public ActionResult Deleted()
        {
            string temp = Request.QueryString["applicationID"];
            int x;
            if (Int32.TryParse(temp, out x))
            {
                x = Int32.Parse(temp);

                service.DeleteApplicationByID(x);
            };
            return new EmptyResult();
        }
    }
}