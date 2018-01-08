using Calculator.Logic.Logic;
using Calculator.Logic.Models;
using System.Web.Http;

namespace Calculator.Controllers
{
    public class CalculatorController : ApiController
    {
        // POST api/calculator
        public IHttpActionResult Post(Calculate calculate)
        {
            if (!ModelState.IsValid) { return BadRequest(ModelState); }
            return Ok(CalculatorLogic.Calculate(calculate));
        }
    }
}