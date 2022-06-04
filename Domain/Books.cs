using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Books
    {
        public Guid Id { get; set; }
        public string Titulli { get; set; }
        public int Faqet { get; set; }
        public string Disponueshmeria { get; set; }
        public string Pershkrimi { get; set; }
        public string Kategoria{ get; set; }
        public string Botuesi { get; set; }
        public int Cmimi{ get; set; }
    }
}