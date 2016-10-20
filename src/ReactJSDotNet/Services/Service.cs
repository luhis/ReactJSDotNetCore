using System.Collections.Generic;
using ReactDemo.Models;
using System.Linq;

namespace ReactDemo.Services
{
    public class Service : IService
    {
        private static readonly IList<ToDo> todos = new List<ToDo>
            {
                new ToDo(1, "Make some code", false),
                new ToDo(2, "Thing that I have done", true)
            };

        ToDo IService.Add(ToDo todo)
        {
            var newId = todos.Any() ? todos.Select(a => a.Id).Max() + 1 : 1;
            todo.Id = newId;
            todos.Add(todo);

            return todo;
        }

        private ToDo GetById(int id)
        {
            return todos.Single(a => a.Id == id);
        }

        void IService.Delete(int id)
        {
            todos.Remove(this.GetById(id));
        }

        IEnumerable<ToDo> IService.GetAll()
        {
            return todos;
        }

        ToDo IService.GetById(int id)
        {
            return this.GetById(id);
        }

        ToDo IService.Update(int id, ToDo todo)
        {
            var found = this.GetById(id);
            found.Done = todo.Done;
            found.Note = todo.Note;
            return found;
        }
    }
}
