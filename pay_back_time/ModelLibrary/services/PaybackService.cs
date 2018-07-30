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
        public ApplicationListModel GetAllApplications()
        {
            ApplicationListModel model = new ApplicationListModel();

            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Select(x => x);

                var applicationList = query.ToList();

                applicationList.ForEach(application =>
                {
                    ApplicationModel a = new ApplicationModel();
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

        public ApplicationListModel GetReviewedApplications()
        {
            ApplicationListModel model = new ApplicationListModel();

            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.Reviewed == true);

                var applicationList = query.ToList();

                applicationList.ForEach(application =>
                {
                    ApplicationModel a = new ApplicationModel();
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

        public ApplicationListModel GetNonReviewedApplications()
        {
            ApplicationListModel model = new ApplicationListModel();

            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.Reviewed == false);

                var applicationList = query.ToList();

                applicationList.ForEach(application =>
                {
                    ApplicationModel a = new ApplicationModel();
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

        public int GetNextApplicationID(ApplicationListModel list)
        {
            return list.Applications.Last().ApplicationID + 1;
        }


        public void CreateUserApplication(ApplicationModel model)
        {
            using (var db = new ApplicationsEntities())
            {
                var list = db.Applications;
                list.Add(new Application()
                {
                    ApplicationID = GetNextApplicationID(GetAllApplications()),
                    Name = model.Name,
                    Email = model.Email,
                    Description = model.Description,
                    Audience = model.Audience,
                    Roadblocks = model.Roadblocks,
                    Requirements = model.Requirements,
                    Reviewed = false,
                    Saved = false,
                    Archived = false
                });
                db.SaveChanges();
            }
        }
    }
}
