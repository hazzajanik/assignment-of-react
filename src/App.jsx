import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Recipies from "./components/Recipies/Recipies";

function App() {
    return (
        <>
            <div className="container mx-auto px-4">
                <Navbar></Navbar>
                <Header></Header>
                <Recipies></Recipies>
            </div>
        </>
    );
}

export default App;
