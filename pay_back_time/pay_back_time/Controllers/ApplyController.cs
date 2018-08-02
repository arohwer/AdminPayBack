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
        [HttpGet]
        public ActionResult Apply()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Apply(ApplicationModel model)
        {
            if (string.IsNullOrEmpty(model.Name))
            {
                ModelState.AddModelError("Name", "Must enter a name");
            }
            if (model.Email == null)
            {
                ModelState.AddModelError("Email", "Must enter a valid email");
            }
            if (model.ProjectTitle == null)
            {
                ModelState.AddModelError("ProjectTitle", "Must enter a valid email");
            }
            if (string.IsNullOrEmpty(model.Description))
            {
                ModelState.AddModelError("Description", "Must enter a description");
            }
            if (string.IsNullOrEmpty(model.Audience))
            {
                ModelState.AddModelError("IntendedAudience", "Must enter an audience");
            }
            if (string.IsNullOrEmpty(model.Roadblocks))
            {
                ModelState.AddModelError("Roadblocks", "Must enter any roadblocks");
            }
            if (string.IsNullOrEmpty(model.Requirements))
            {
                ModelState.AddModelError("Requirements", "Must enter project requirements");
            }

            if (ModelState.IsValid)
            {
                service.CreateUserApplication(model);
<<<<<<< HEAD
                return RedirectToAction("ApplySuccess");
=======
                return RedirectToAction("ApplySuccess", model);
>>>>>>> application
            }
            else
            {
                return View(model);
            }
            //service.CreateUserApplication(model);

        }


        public ActionResult ApplySuccess(ApplicationModel model)
        {
<<<<<<< HEAD

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
=======
            ViewBag.name = model.Name;
            ViewBag.email = model.Email;
            return View();
        }


        //[Authorize(Roles ="Admin")]
        public ActionResult Applications()
        {
            ViewBag.section = "new";
            ViewBag.noResults = "No new applications.";
            return View(service.GetNonReviewedApplications());
        }

        //[Authorize(Roles ="Admin")]
        public ActionResult ReviewedApplications()
        {
            ViewBag.section = "review";

            ViewBag.noResults = "No reviewed applications.";
            return View("Applications", service.GetReviewedApplications());
        }

        //[Authorize(Roles ="Admin")]
        public ActionResult SavedApplications()
        {
            ViewBag.section = "save";

            ViewBag.noResults = "No saved applications.";
            return View("Applications", service.GetSavedApplications());
        }
        //[Authorize(Roles ="Admin")]
        public ActionResult ArchivedApplications()
        {
            ViewBag.section = "archive";

            ViewBag.noResults = "No archived applications.";
            return View("Applications", service.GetArchivedApplications());
        }

        //[Authorize(Roles ="Admin")]

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
>>>>>>> application
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
    }
}