using System;
using System.Collections.Generic;
using Application.Profiles;

namespace Application.Books
{
    public class BookDto
    {
        public Guid Id { get; set; }

        public string Titulli { get; set; }
        public int Faqet { get; set; }
        public string Disponueshmeria { get; set; }
        public string Pershkrimi { get; set; }
        public string Kategoria{ get; set; }
        public string Botuesi { get; set; }
        public int Cmimi{ get; set; }
         public string HostUsername { get; set; }
        public bool IsCancelled { get; set; }
        public ICollection<Profile> Readers { get; set; }
    }
} 