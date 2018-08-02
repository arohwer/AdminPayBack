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

        void SaveApplicationByID(int id);
        void RemoveSaveApplicationByID(int id);
        void ArchiveApplicationByID(int id);
        void RemoveArchiveApplicationByID(int id);
        void ViewApplicationByID(int id);
        //void RemoveViewApplicationByID(int id);
        void DeleteApplicationByID(int id);
        void InvertSaveApplicationByID(int id);
        void InvertArchiveApplicationByID(int id);

    }
}
