using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactDemo.Services;
using ReactDemo.Models;

namespace ReactJSDotNet.Controllers
{
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {
        private readonly IService _service;

        public ToDoController(IService service)
        {
            this._service = service;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<ToDo> Get()
        {
            return this._service.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ToDo Get(int id)
        {
            return this._service.GetById(id);
        }

        // POST api/values
        [HttpPost]
        public ToDo Post([FromBody]ToDo value)
        {
            return this._service.Add(value);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public ToDo Put(int id, [FromBody]ToDo value)
        {
            return this._service.Update(id, value);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            this._service.Delete(id);
        }
    }
}
