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

        public ActionResult CreateApplication(UserApplicationModel model)
        {
            service.CreateUserApplication(model);

            return RedirectToAction("ApplySuccess");
        }
    }
}