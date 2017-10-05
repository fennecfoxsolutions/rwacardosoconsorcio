using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RWA.CardosoConsorcio.Models;
using RWA.CardosoConsorcio.util;
using Microsoft.Extensions.Options;

namespace RWA.CardosoConsorcio.Controllers
{
    public class HomeController : Controller
    {
        public RWASettings _settings;

        public HomeController(IOptions<RWASettings> settings)
        {
            _settings = settings.Value;
        }

        public IActionResult Index()
        {            
            return View();
        }

        [HttpPost]
        public IActionResult SendMail([FromBody] ContatoViewModel model)
        {
            try
            {
                if (model == null)
                {
                    return BadRequest();
                }

                EmailManager email = new EmailManager();
                email.Enviar(model, _settings);

                return new OkObjectResult(true);
            }
            catch (System.Exception ex)
            {
                return new BadRequestObjectResult(ex.Message);                
            }
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
