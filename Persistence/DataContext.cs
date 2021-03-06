using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext( DbContextOptions options) : base(options)
        {
        }
        public DbSet<Book> Books { get; set; }

        public DbSet<BookReader> BookReaders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<BookReader>(x => x.HasKey(aa => new {aa.AppUserId, aa.BookId}));

            builder.Entity<BookReader>()
                .HasOne(u => u.AppUser)
                .WithMany(a => a.Books)
                .HasForeignKey(aa => aa.AppUserId);

            builder.Entity<BookReader>()
                .HasOne(u => u.Book)
                .WithMany(a => a.Readers)
                .HasForeignKey(aa => aa.BookId);
        }

    }
}