using System;
using System.Threading.Tasks;
using Application.Books;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    
    public class BooksController : BaseApiController
    {
       
        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult> GetBook(Guid id)
        {
             
             return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        } 
        [HttpPost]
        public async Task<IActionResult> CreateBook(Book book)
        {
          return HandleResult(await Mediator.Send(new Create.Command {Book = book}));
        }

        [Authorize(Policy="IsBookHost")]
        [HttpPut("{id}")]

        public async Task<IActionResult> EditBook(Guid id, Book book)
        {
            book.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command{Book = book}));
        }

        [Authorize(Policy="IsBookHost")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
    }
}
}
