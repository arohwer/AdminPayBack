using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLibrary.models
{
    public class UserApplicationListModel
    {
        public List<UserApplicationModel> Applications { get; set; } = new List<UserApplicationModel>();
    }
}
