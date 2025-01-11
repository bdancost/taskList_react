import ItemsContainer from "./ItemsContainer";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Minha lista de tarefas do dia</h1>
      <ItemsContainer
        taskList={["Lavar roupa", "Comprar pão", "Estudar React"]}
      />
    </div>
  );
}

export default App;
