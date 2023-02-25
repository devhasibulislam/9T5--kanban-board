import React from "react";
import Board from "./components/dragAndDrop/Board";
import Card from "./components/dragAndDrop/Card";
import TodoCard from "./components/TodoCard";
import useTodo from "./hooks/useTodo";

const App = () => {
  const todo = useTodo();

  return (
    <section className="h-screen p-4 bg-slate-200">
      <div className="max-w-screen-lg h-full mx-auto grid grid-cols-12 gap-x-4 shadow-md p-4 rounded-md">
        <div className="col-span-4 shadow p-4 rounded overflow-y-scroll">
          <h1 className="text-xl font-semibold text-center bg-orange-500/5 py-2 rounded">
            🏁 Do
          </h1>
          <div className="flex flex-col gap-y-4 mt-4">
            {todo.map(
              ({ _id, title, description, gender, email, ip_address }) => (
                <Board id="board-1">
                  <Card id="card-1" draggable="true">
                    <TodoCard
                      key={_id}
                      title={title}
                      description={description}
                      gender={gender}
                      email={email}
                      ip_address={ip_address}
                    />
                  </Card>
                </Board>
              )
            )}
          </div>
        </div>
        <div className="col-span-4 shadow p-4 rounded overflow-y-scroll">
          <h1 className="text-xl font-semibold text-center bg-purple-500/5 py-2 rounded">
            🚧 Doing
          </h1>
          <div className="flex flex-col gap-y-4 mt-4">
            {todo.map(
              ({ _id, title, description, gender, email, ip_address }) => (
                <Board id="board-2">
                  <Card id="card-2" draggable="true">
                    <TodoCard
                      key={_id}
                      title={title}
                      description={description}
                      gender={gender}
                      email={email}
                      ip_address={ip_address}
                    />
                  </Card>
                </Board>
              )
            )}
          </div>
        </div>
        <div className="col-span-4 shadow p-4 rounded overflow-y-scroll">
          <h1 className="text-xl font-semibold text-center bg-green-500/5 py-2 rounded">
            ✅ Done
          </h1>
          <div className="flex flex-col gap-y-4 mt-4">
            {todo.map(
              ({ _id, title, description, gender, email, ip_address }) => (
                <Board id="board-3">
                  <Card id="card-3" draggable="true">
                    <TodoCard
                      key={_id}
                      title={title}
                      description={description}
                      gender={gender}
                      email={email}
                      ip_address={ip_address}
                    />
                  </Card>
                </Board>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
