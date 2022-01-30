import css from './App.module.css'

import Cats from "./components/Cats/Cats";
import Dogs from "./components/Dogs/Dogs";

function App() {

  return (
    <div className={css.catDogBlock} >
        <div>
            <Cats/>
        </div>
        <div>
            <Dogs/>
        </div>
    </div>
  );
}

export default App;
