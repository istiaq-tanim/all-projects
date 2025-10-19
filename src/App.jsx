import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TaskBoard from './components/TaskBoard/TaskBoard';
import TaskProvider from "./Providers/TaskProvider";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar></Sidebar>
      <TaskProvider>
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header></Header>
          <TaskBoard></TaskBoard>
        </main>
      </TaskProvider>
    </div>
  )
}

export default App
