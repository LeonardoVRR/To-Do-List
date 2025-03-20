import { useState } from "react";
import Tasks from "../../components/TaskContainer/Task";
import AddTasks from "../../components/TaskContainer/AddTask";
import DescriptionTask from "../../components/TaskContainer/DescriptionTask";
import { ChevronLeft } from "lucide-react";
import "./global.css";

function Home() {
  if (localStorage.getItem("toDoList") == null) {
    localStorage.setItem("toDoList", JSON.stringify([]));
  }

  let toDoList = JSON.parse(localStorage.getItem("toDoList"));

  const [tasks, setTasks] = useState(toDoList);

  let [taskInfo, setTaskInfo] = useState(null);
  let [statusClickDescription, setStatusClickDescription] = useState(null);

  function onAddTaskSubmit(title, description) {
    const newTasks = [...tasks];

    newTasks.push({
      id: tasks.length,
      title: title,
      description: description,
      isCompleted: false,
    });

    // console.log(`Lista Novas Tarefas:`);
    // console.log(newTasks);

    localStorage.setItem("toDoList", JSON.stringify(newTasks));

    setTasks(newTasks);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        // console.log(`Lista Original:`);
        // console.log(tasks);
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });

    setTasks(newTasks);
  }

  async function onDescriptionTaskClick(selectedTask) {
    const resp = await new Promise((resolve) => {
      tasks.map((task) => {
        if (task.id == selectedTask.id) {
          // console.log(`Tarefa Selecionada:`);
          // console.log(selectedTask);
          resolve({
            status: true,
            taskInfo: selectedTask,
          });
        }
      });
    });

    setStatusClickDescription(resp.status);
    setTaskInfo(resp.taskInfo);

    //console.log(statusClickDescription);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks
      .filter((task) => task.id != taskId)
      .map((task, index) => {
        return {
          ...task,
          id: index,
        };
      });

    setTasks(newTasks);
  }

  return (
    <article className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <section
        className={`w-[500px] flex flex-col gap-2 items-center ${
          statusClickDescription ? "hidden" : "block"
        }`}
      >
        <h1 className="text-3xl text-slate-100 font-bold text-center w-full">
          Gerenciador de Tarefas
        </h1>

        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

        {tasks.length == 0 ? (
          <div className="bg-slate-200 p-4 flex flex-col gap-2 shadow rounded-md w-full text-center">
            <h1 className="text-slate-500 font-medium text-xl">
              Lista de tarefas vazia!
            </h1>
          </div>
        ) : (
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
            onDescriptionTaskClick={onDescriptionTaskClick}
          />
        )}
      </section>
      <section
        className={`w-[500px] flex flex-col gap-2 items-center ${
          !statusClickDescription ? "hidden" : "block"
        }`}
      >
        <div className="flex items-center gap-1 w-full">
          <button
            onClick={() => setStatusClickDescription(false)}
            className="text-white"
          >
            <ChevronLeft />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center w-full">
            Detalhes da tarefa
          </h1>
        </div>
        {taskInfo && statusClickDescription == true ? (
          <DescriptionTask taskInfo={taskInfo} />
        ) : (
          <p>Carregando...</p>
        )}
      </section>
    </article>
  );
}

export default Home;
