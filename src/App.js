import Form from "./Form";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  {
    content: "Zacząć robić Todo-listę Immunitable", done: true,
  },
  {
    content: "Zrobić Todo-listę od A do Z", done: false,
  }
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form />
        }
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
          />
        }
        body={
          <Tasks
            tasks={tasks}
            hideDoneTasks={hideDoneTasks}
          />
        }
      />
    </Container>
  );
}

export default App;
