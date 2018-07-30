using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLibrary.models
{
    public class ApplicationModel
    {
        public int ApplicationID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Description { get; set; }
        public string Audience { get; set; }
        public string Roadblocks { get; set; }
        public string Requirements { get; set; }
        public bool Reviewed { get; set; }
        public bool Saved { get; set; }
        public bool Archived { get; set; }
    }
}
