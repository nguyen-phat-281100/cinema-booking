import About from "containers/client/About/About";
import Home from "containers/client/Home/Home";
import Review from "containers/client/Review/Review";
import Theater from "containers/client/Theater/Theater";
import Header from "components/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // as là đổi tên
import MovieDetails from "containers/client/MovieDetails/MovieDetails";
import PageNotFound from "containers/shared/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} /> {/* Home laf 1 component */}
          {/* thêm props exact để đưa vào trang cho chính xác */}
          <Route path="/theater" component={Theater} />
          <Route path="/review" component={Review} />
          <Route path="/about" component={About} />
          <Route path="/movie-detail/:id" component={MovieDetails} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
