//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataAccessLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class Application
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
