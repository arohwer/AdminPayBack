using ModelLibrary.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLibrary.services
{
    public interface IPaybackService
    {

        ApplicationListModel GetAllApplications();
        ApplicationListModel GetReviewedApplications();
        ApplicationListModel GetNonReviewedApplications();
        ApplicationListModel GetSavedApplications();
        ApplicationListModel GetArchivedApplications();
        int GetNextApplicationID(ApplicationListModel list);
        void CreateUserApplication(ApplicationModel model);
    }
}
