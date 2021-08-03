using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // created this class just to test error handling of common bad reqeusts for client side 
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context) 
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var notValid = _context.Users.Find(-1);
            if (notValid == null) return NotFound();
            return Ok(notValid);
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetUnAuthorized()
        {   
            return BadRequest("Bad request error message");
        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            //will never be an id of -1
            var notValid = _context.Users.Find(-1);
            var nullReference = notValid.ToString();
            return nullReference;
        }
    }
}