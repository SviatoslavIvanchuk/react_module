import Form from "./component/Form/Form";
import List from "./component/List/List";
import Status from "./component/Status/Status";

import css from "./App.module.css"

function App() {
  return (
    <div className={css.taskList}>
        <div>
            <Status/>
            <hr/>
            <Form/>
            <hr/>
        </div>
      <List/>
    </div>
  );
}

export default App;
