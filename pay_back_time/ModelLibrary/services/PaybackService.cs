using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ModelLibrary.models;
using DataAccessLayer;

namespace ModelLibrary.services
{
    //This is where we will make our queries to the database
    public class PaybackService : IPaybackService
    {
        public UserApplicationListModel GetAllApplications()
        {
            UserApplicationListModel model = new UserApplicationListModel();

            using (var db = new PayTestEntities())
            {
                var query = db.UserApplications.Select(x => x);

                var applicationList = query.ToList();

                applicationList.ForEach(application =>
                {
                    UserApplicationModel a = new UserApplicationModel();
                    a.ApplicationID = application.ApplicationID;
                    a.Name = application.Name;
                    a.Email = application.Email;
                    a.Description = application.Description;
                    a.Audience = application.Audience;
                    a.Roadblocks = application.Roadblocks;
                    a.Requirements = application.Requirements;
                    a.Reviewed = application.Reviewed;

                    model.Applications.Add(a);
                });


            }
            return model;
        }

        public UserApplicationListModel GetReviewedApplications()
        {
            UserApplicationListModel model = new UserApplicationListModel();

            using (var db = new PayTestEntities())
            {
                var query = db.UserApplications.Where(x => x.Reviewed == true);

                var applicationList = query.ToList();

                applicationList.ForEach(application =>
                {
                    UserApplicationModel a = new UserApplicationModel();
                    a.ApplicationID = application.ApplicationID;
                    a.Name = application.Name;
                    a.Email = application.Email;
                    a.Description = application.Description;
                    a.Audience = application.Audience;
                    a.Roadblocks = application.Roadblocks;
                    a.Requirements = application.Requirements;
                    a.Reviewed = application.Reviewed;

                    model.Applications.Add(a);
                });


            }
            return model;
        }

        public UserApplicationListModel GetNonReviewedApplications()
        {
            UserApplicationListModel model = new UserApplicationListModel();

            using (var db = new PayTestEntities())
            {
                var query = db.UserApplications.Where(x => x.Reviewed == false);

                var applicationList = query.ToList();

                applicationList.ForEach(application =>
                {
                    UserApplicationModel a = new UserApplicationModel();
                    a.ApplicationID = application.ApplicationID;
                    a.Name = application.Name;
                    a.Email = application.Email;
                    a.Description = application.Description;
                    a.Audience = application.Audience;
                    a.Roadblocks = application.Roadblocks;
                    a.Requirements = application.Requirements;
                    a.Reviewed = application.Reviewed;

                    model.Applications.Add(a);
                });


            }
            return model;
        }

        public int GetNextApplicationID(UserApplicationListModel list)
        {
            return list.Applications.Last().ApplicationID + 1;
        }


        public void CreateUserApplication(UserApplicationModel model)
        {
            using (var db = new PayTestEntities())
            {
                var list = db.UserApplications;
                list.Add(new UserApplication()
                {
                    ApplicationID = GetNextApplicationID(GetAllApplications()),
                    Name = model.Name,
                    Email = model.Email,
                    Description = model.Description,
                    Audience = model.Audience,
                    Roadblocks = model.Roadblocks,
                    Requirements = model.Requirements,
                    Reviewed = false
                });
                db.SaveChanges();
            }
        }
    }
}
