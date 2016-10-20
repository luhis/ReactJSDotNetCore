namespace ReactJSDotNet.Models
{
    public class ToDo
    {
        public ToDo()
        {

        }

        public ToDo(int id, string note, bool done)
        {
            Id = id;
            Note = note;
            Done = done;
        }

        public int Id { get; set; }
        public string Note { get; set; }
        public bool Done { get; set; }
    }
}
