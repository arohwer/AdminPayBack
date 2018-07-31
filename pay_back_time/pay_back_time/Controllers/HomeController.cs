using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace pay_back_time.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (Session["visited"] == null)
            {
                ViewBag.visited = false;
                Session["visited"] = DateTime.Now;
            } else
            {
                ViewBag.visited = true;
            }
            return View();
        }

        //public ActionResult IndexVisited()
        //{
        //    ViewBag.visited = true;
        //    return View("Index");
        //}

        public ActionResult Projects()
        {
            return View();
        }

        public ActionResult Events()
        {
            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }

        //public ActionResult Apply()
        //{
        //    return View();
        //}
    }
}