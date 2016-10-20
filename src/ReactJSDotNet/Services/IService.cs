using System.Collections.Generic;
using ReactJSDotNet.Models;

namespace ReactJSDotNet.Services
{
    public interface IService
    {
        IEnumerable<ToDo> GetAll();
        ToDo GetById(int id);
        ToDo Add(ToDo todo);
        ToDo Update(int id, ToDo todo);
        void Delete(int id);
    }
}
