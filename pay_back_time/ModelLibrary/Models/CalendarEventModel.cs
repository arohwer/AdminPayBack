using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLibrary.Models
{
    [Table("CalendarEvents")]
    public class CalendarEventModel
    {
        [Key]
        public int EventID { get; set; }

        [Display(Name = "Title")]
        [Required(ErrorMessage = "Please enter an event title")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Please enter an event description")]
        public string Description { get; set; }

        [Required(ErrorMessage = "Please enter an event location")]
        public string Location { get; set; }

        [Required(ErrorMessage = "Please enter a date for the event")]
        public DateTime Date { get; set; }

        [Required(ErrorMessage = "Please enter a time for the event")]
        public DateTime Time { get; set; }

        public string ImagePath { get; set; }
        //$"~/Images/{ImagePath}"
        //$"~/Images/calendar/event_default.jpg"
        //public string ImagePath
        //{
        //    get { return Title.Replace(" ", string.Empty) + ".jpg"; }
        //}
    }
}
