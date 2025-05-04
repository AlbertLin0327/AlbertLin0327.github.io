import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Welcome } from "./components/Welcome";
import { Experience } from "./components/Experience";
import { Blog } from "./components/Blog";
import { Projects } from "./components/Projects";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="about" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;