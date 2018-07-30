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

        UserApplicationListModel GetAllApplications();
        UserApplicationListModel GetReviewedApplications();
        UserApplicationListModel GetNonReviewedApplications();
        int GetNextApplicationID(UserApplicationListModel list);
        void CreateUserApplication(UserApplicationModel model);

    }
}
