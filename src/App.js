import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import IssuesList from "./pages/IssuesListPage";
import Issue from "./pages/IssuePage";
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
                <Route path="/" exact component={IssuesList} />
                <Route path="/issues/:id" exact component={Issue} />
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
