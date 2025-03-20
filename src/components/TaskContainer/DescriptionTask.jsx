import { useState } from "react";

function DescriptionTask({ taskInfo }) {
  const statusClickDescription = taskInfo.isCompleted
    ? " Concluida"
    : " Pendente";

  return (
    <div className="p-6 bg-slate-200 rounded-md shadow w-full text-center flex flex-col gap-4 overflow-hidden overflow-y-auto">
      <h1 className="text-slate-500 font-medium text-2xl">{taskInfo.title}</h1>
      <h2 className="text-lg">
        Status da tarefa:
        <span
          className={`font-bold ${
            taskInfo.isCompleted ? "text-green-400" : "text-red-600"
          }`}
        >
          {statusClickDescription}
        </span>
      </h2>
      <p className="w-full h-full text-justify">{taskInfo.description}</p>
    </div>
  );
}

export default DescriptionTask;
