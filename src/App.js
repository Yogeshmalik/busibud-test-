import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import "./App.scss";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";

function App() {
  return (
    <div className="app-container">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
