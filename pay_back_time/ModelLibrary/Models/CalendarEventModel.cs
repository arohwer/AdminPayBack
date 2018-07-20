using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelLibrary.Models
{
    public class CalendarEventModel
    {
        public int ID { get; set; }

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

        //$"~/Images/{ImagePath}"
        public string ImagePath
        {
            get { return Title.Replace(" ", string.Empty) + ".jpg"; }
        }
    }
}
