import { Stack } from "react-bootstrap";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";

function App() {
  return (
    <Stack
      direction="vertical"
      style={{ width: "1000px", margin: "100px auto" }}
    >
      <AddTask />
      <ListTask />
    </Stack>
  );
}

export default App;
