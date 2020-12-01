import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Issues from './pages/IssuesPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container mx-auto h-screen">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <Switch>
                <Route path="/" exact component={Issues} />
              </Switch>
            </div>
          </div>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
