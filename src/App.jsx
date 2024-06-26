import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./screens/Home";
import Sessions from "./screens/Sessions";
import ViewClipAnalytics from "./screens/ViewClipAnalytics";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/41-dark-generated-ai-video-is-ready":
        title = "";
        metaDescription = "";
        break;
      case "/39-dark-edit-video":
        title = "";
        metaDescription = "";
        break;
      case "/23-dark-sessions":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/23-sessions" element={<Sessions />} />
      <Route path="/41-view-clip-analytics" element={<ViewClipAnalytics />} />
    </Routes>
  );
}
export default App;
