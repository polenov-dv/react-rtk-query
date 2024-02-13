import { Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "redux/store";
import { Footer } from "components/Footer";
import { Home } from "pages/Home";
import { Header } from "components/Header";

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Home />
        <Footer />
      </Provider>
    </div>
  );
};

export default App;
