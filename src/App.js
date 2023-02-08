import "./App.css";
import MainFooter from "./components/main-footer/MainFooter";
import MainHeader from "./components/main-header/MainHeader";
import MainPage from "./pages/main-page/MainPage";

function App() {
  return (
    <div className="App">
      {/* Header that repeat in all pages */}
      <MainHeader />
      {/* This will change to the routes supongo */}
      <MainPage />
      {/* Footer that repeat in all pages */}
      <MainFooter />
    </div>
  );
}

export default App;
