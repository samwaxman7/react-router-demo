import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
import Review from "../Reviews/Review";

import AboutMe from "../AboutMe/AboutMe";
import Contact from "../AboutMe/Contact";
import Hobbies from "../AboutMe/Hobbies";
import MyStory from "../AboutMe/MyStory";

import AboutUs from "../AboutUs/AboutUs";
import SiteMission from "../AboutUs/SiteMission";
import SiteHistory from "../AboutUs/SiteHistory";

import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    // Fetch the review data from the server.
    fetch("https://api.nomoreparties.co/emoji-critic-ens")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Pass the parsed response body to the setter function.
        setReviews(data);
      })
      .catch(console.error);
    // An empty dependency array means the hook only runs when
    // component launches.
  }, []);
  return (
    <div className="App">
      <Header />
      {/* Wrap a Route component inside a Routes component
          and specify the path and element attributes as shown. */}
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="mission" element={<SiteMission />} />
          <Route path="history" element={<SiteHistory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
