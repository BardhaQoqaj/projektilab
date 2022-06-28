using Domain;
using FluentValidation;

namespace Application.Books
{
    public class BookValidator : AbstractValidator<Book>
    {
        public BookValidator()
        {
            RuleFor(x => x.Titulli).NotEmpty();
            RuleFor(x => x.Pershkrimi).NotEmpty();
            RuleFor(x => x.Cmimi).NotEmpty();
            RuleFor(x => x.Kategoria).NotEmpty();
            RuleFor(x => x.Botuesi).NotEmpty();
            RuleFor(x => x.Faqet).NotEmpty();
            RuleFor(x => x.Disponueshmeria).NotEmpty();
        }
    }
} 