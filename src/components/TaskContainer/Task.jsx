import { Check, ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({
  tasks,
  onTaskClick,
  onDeleteTaskClick,
  onDescriptionTaskClick,
}) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow w-full">
      {tasks.map((task) => {
        //console.log(task.title)
        return (
          <li
            key={task.id}
            className="flex flex-row justify-between items-center gap-2 h-full overflow-hidden"
          >
            <button
              onClick={() => {
                onTaskClick(task.id);
              }}
              className={`overflow-hidden text-left bg-slate-400 text-white rounded-md w-full h-full flex items-center gap-1 ${
                task.isCompleted && "line-through"
              }`}
              title={task.isCompleted ? "Tarefa Concluida" : "Tarefa Pendente"}
            >
              {task.isCompleted ? (
                <>
                  <div className="inline h-full w-4 bg-green-400"></div>{" "}
                  <div className="w-full h-full flex items-center gap-1 py-2">
                    <Check /> {task.title}
                  </div>
                </>
              ) : (
                <>
                  <div className="inline h-full w-4 bg-red-600"></div>{" "}
                  <div className="w-full h-full flex items-center gap-1 py-2">
                    {task.title}
                  </div>
                </>
              )}
            </button>
            <button
              onClick={() => {
                onDescriptionTaskClick(task);
              }}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <TrashIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Tasks;
