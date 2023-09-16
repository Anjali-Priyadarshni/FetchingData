import { Routes,Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { BookImage } from "./BooksData/List/Date/Name";
import { LatestBook } from "./BooksData/List/currentDate/Name";
import { BookName } from "./BooksData/List/Name";
import { Reviews } from "./BooksData/Reviews/Author/Data";
import ArticleSearch from "./AxiosPost/Article";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/date/name" Component={BookImage}></Route>
          <Route path="/currentdate/name" Component={LatestBook}></Route>
          <Route path="/list/name" Component={BookName}></Route>
          <Route path="/review" Component={Reviews}></Route>
          <Route path="/search" Component={ArticleSearch}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
