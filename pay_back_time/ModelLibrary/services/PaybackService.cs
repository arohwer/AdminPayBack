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
                    a.ProjectTitle = application.ProjectTitle;
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
                    a.ProjectTitle = application.ProjectTitle;
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
                    a.ProjectTitle = application.ProjectTitle;
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

        public ApplicationListModel GetSavedApplications()
        {
            ApplicationListModel model = new ApplicationListModel();

            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.Saved == true);

                var applicationList = query.ToList();

                applicationList.ForEach(application =>
                {
                    ApplicationModel a = new ApplicationModel();
                    a.ApplicationID = application.ApplicationID;
                    a.Name = application.Name;
                    a.Email = application.Email;
                    a.ProjectTitle = application.ProjectTitle;
                    a.Description = application.Description;
                    a.Audience = application.Audience;
                    a.Roadblocks = application.Roadblocks;
                    a.Requirements = application.Requirements;
                    a.Reviewed = application.Reviewed;
                    a.Saved = application.Saved;
                    a.Archived = application.Archived;

                    model.Applications.Add(a);
                });


            }
            return model;
        }

        public ApplicationListModel GetArchivedApplications()
        {
            ApplicationListModel model = new ApplicationListModel();

            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.Archived == true);

                var applicationList = query.ToList();

                applicationList.ForEach(application =>
                {
                    ApplicationModel a = new ApplicationModel();
                    a.ApplicationID = application.ApplicationID;
                    a.Name = application.Name;
                    a.Email = application.Email;
                    a.ProjectTitle = application.ProjectTitle;
                    a.Description = application.Description;
                    a.Audience = application.Audience;
                    a.Roadblocks = application.Roadblocks;
                    a.Requirements = application.Requirements;
                    a.Reviewed = application.Reviewed;


            }
            return model;
        }
        public int GetNextApplicationID(ApplicationListModel list)
        {
            int count =0;
            if (list.Applications.Count > 0)
            {
                count = list.Applications.Last().ApplicationID + 1;
            }
            return count;
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
                    ProjectTitle = model.ProjectTitle,
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
        public void SaveApplicationByID(int id)
        {
            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.ApplicationID == id);
                var application = query.First();
                application.Saved = true;
                db.SaveChanges();
            }
            RemoveArchiveApplicationByID(id);
        }

        public void ArchiveApplicationByID(int id)
        {
            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.ApplicationID == id);
                var application = query.First();
                application.Archived = true;
                db.SaveChanges();
            }
            RemoveSaveApplicationByID(id);
        }

        public void ViewApplicationByID(int id)
        {
            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.ApplicationID == id);
                var application = query.First();
                application.Reviewed = true;
                db.SaveChanges();
            }
        }

        public void RemoveSaveApplicationByID(int id)
        {
            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.ApplicationID == id);
                var application = query.First();
                application.Saved = false;
                db.SaveChanges();
            }
        }

        public void RemoveArchiveApplicationByID(int id)
        {
            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.ApplicationID == id);
                var application = query.First();
                application.Archived = false;
                db.SaveChanges();
            }
        }
        public void DeleteApplicationByID(int id)
        {
            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.ApplicationID == id);
                var application = query.First();
                db.Applications.Remove(application);
                db.SaveChanges();
            }
        }
        public void InvertSaveApplicationByID(int id)
        {
            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.ApplicationID == id);
                var application = query.First();
                application.Saved = !application.Saved;
                db.SaveChanges();
            }
        }
        public void InvertArchiveApplicationByID(int id)
        {
            using (var db = new ApplicationsEntities())
            {
                var query = db.Applications.Where(x => x.ApplicationID == id);
                var application = query.First();
                application.Archived = !application.Archived;
                db.SaveChanges();
            }
        }
    }
}
