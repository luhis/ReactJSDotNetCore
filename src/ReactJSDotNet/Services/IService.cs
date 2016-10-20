using ReactDemo.Models;
using System.Collections.Generic;

namespace ReactDemo.Services
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
