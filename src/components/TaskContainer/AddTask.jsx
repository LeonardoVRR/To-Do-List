function AddTasks({ onAddTaskSubmit }) {
  function addTask(event) {
    event.preventDefault();

    const title = event.currentTarget.children[0].value;
    const description = event.currentTarget.children[1].value;

    title.trim() == "" || description.trim() == ""
      ? alert("Preencha o titulo e a descrição da tarefa!")
      : onAddTaskSubmit(title, description);

    event.currentTarget.children[0].value = "";
    event.currentTarget.children[1].value = "";
  }

  return (
    <form
      id="addTaskForm"
      className="bg-slate-200 p-4 flex flex-col gap-2 shadow rounded-md w-full"
      onSubmit={addTask}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Título da tarefa"
        className="w-full px-4 py-2 rounded-md border border-slate-300 outline-slate-400"
        required
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Descrição da tarefa"
        className="w-full px-4 py-2 rounded-md border border-slate-300 outline-slate-400"
        required
      />
      <button
        type="submit"
        className="bg-slate-500 text-white px-4 py-2 w-full rounded-md font-medium"
      >
        Adicionar
      </button>
    </form>
  );
}

export default AddTasks;
