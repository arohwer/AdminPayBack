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

        public ActionResult ApplySuccess()
        {
      
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


        //public ActionResult Applications(string list)
        //{
        //    ApplicationListModel model;
        //    if (list == "new")
        //    {
        //        ViewBag.noResults = "No unread applications.";
        //        model = service.GetNonReviewedApplications();
        //    }
        //    else if (list == "reviewed")
        //    {
        //        ViewBag.noResults = "No reviewed applications.";
        //        model = service.GetReviewedApplications();
        //    }
        //    else if (list == "saved")
        //    {
        //        ViewBag.noResults = "No saved results.";
        //        model = service.GetSavedApplications();
        //    }
        //    else if (list == "archived")
        //    {
        //        ViewBag.noResults = "No archived results.";
        //        model = service.GetArchivedApplications();
        //    }
        //    else
        //    {
        //        model = null;
        //    }
        //    return View(model);
        //}
        //[HttpPost]
        public ActionResult CreateApplication(ApplicationModel model)
        {
            //if (string.IsNullOrEmpty(model.Name))
            //{
            //    ModelState.AddModelError("Name", "Must enter a name");
            //}
            //if (model.Email == null)
            //{
            //    ModelState.AddModelError("Email", "Must enter a valid email");
            //}
            //if (string.IsNullOrEmpty(model.Description))
            //{
            //    ModelState.AddModelError("Description", "Must enter a description");
            //}
            //if (string.IsNullOrEmpty(model.ImageUrl))
            //{
            //    ModelState.AddModelError("ImageUrl", "Must enter an ImageUrl");
            //}

            //if (ModelState.IsValid)
            //{
            //    service.CreateUserApplication(model);
            //}
            service.CreateUserApplication(model);

            return RedirectToAction("ApplySuccess");
        }
    }
}