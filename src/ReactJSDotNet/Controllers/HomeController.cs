using Microsoft.AspNetCore.Mvc;
using ReactDemo.Services;

namespace ReactJSDotNet.Controllers
{
    public class HomeController : Controller
    {
        private readonly IService _service;
        public HomeController(IService service)
        {
            this._service = service;
        }

        public IActionResult Index()
        {
            var todos = this._service.GetAll();
            return View(new ViewModels.Index() { ToDos = todos });
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
