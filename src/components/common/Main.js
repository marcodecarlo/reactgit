import Issues from "../Issue/Issues";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function main() {
  return (
    <main className="container mx-auto h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Router>
            <Switch>
              <Route path="/" exact component={Issues} />
            </Switch>
          </Router>
        </div>
      </div>
    </main>
  );
}

export default main;
