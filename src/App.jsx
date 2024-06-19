import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx"; // Import the new PostJob page
import ApplyJob from "./pages/ApplyJob.jsx"; // Import the new ApplyJob page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/post-job" element={<PostJob />} /> {/* Add route for posting a job */}
      <Route path="/apply-job/:jobId" element={<ApplyJob />} /> {/* Add route for applying to a job */}
      </Routes>
    </Router>
  );
}

export default App;
