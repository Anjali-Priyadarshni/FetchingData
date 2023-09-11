import { Routes,Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { BookImage } from "./BooksData/List/Date/Name";
import { LatestBook } from "./BooksData/List/currentDate/Name";
import { BookName } from "./BooksData/List/Name";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/date/name" Component={BookImage}></Route>
          <Route path="/currentdate/name" Component={LatestBook}></Route>
          <Route path="/list/name" Component={BookName}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
