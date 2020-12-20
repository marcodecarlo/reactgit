import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IssuesList from "./pages/IssuesListPage";
import IssuePage from "./pages/IssuePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const ConfigContext = React.createContext();

function App() {
  const [username, setUsername] = useState( "marcodecarlo");
  const [repo, setRepo] = useState("reactgit");

  return (
    <>
      <ConfigContext.Provider value={{username,repo,setUsername,setRepo}}>
        <Router>
          <Header />
          <main className="container mx-auto h-screen">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="px-4 py-6 sm:px-0">
                <Switch>
                  <Route key="home" path="/" exact component={IssuesList} />
                  <Route
                    key="add-issue"
                    path="/add/issue"
                    exact
                    component={IssuePage}
                  />
                  <Route
                    key="id-issue"
                    path="/issues/:id"
                    exact
                    component={IssuePage}
                  />
                </Switch>
              </div>
            </div>
          </main>
        </Router>
      </ConfigContext.Provider>
      <Footer />
    </>
  );
}

export default App;
