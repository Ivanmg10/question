import "./App.css";
import MainFooter from "./components/main-footer/MainFooter";
import MainHeader from "./components/main-header/MainHeader";
import MainPage from "./pages/main-page/MainPage";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainPage />
      <MainFooter />
    </div>
  );
}

export default App;
