import { Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";

import LandingPage from "./components/LandingPage";
// import React = require("react");


function Router() {
  return (
    
      <Route path="/" component={LandingPage} />
      
    
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
