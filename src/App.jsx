import ItemsContainer from "./ItemsContainer";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Minha lista de tarefas do dia</h1>
      <ItemsContainer
        taskList={[
          { id: 1, task: "Lavar roupa" },
          { id: 2, task: "Comprar pão" },
          { id: 3, task: "Estudar React" },
        ]}
      />
    </div>
  );
}

export default App;
