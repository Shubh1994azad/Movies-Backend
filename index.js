const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const moviesData = [
  { id: 1, name: "sholay", rating: "10", releasedDate: "12/06/1970" },
  { id: 2, name: "Baaghi", rating: "10", releasedDate: "12/06/1970" },
  { id: 3, name: "3 idiots", rating: "10", releasedDate: "12/06/1970" },
  { id: 4, name: "Race", rating: "10", releasedDate: "12/06/1970" },
  { id: 5, name: "Race 2", rating: "10", releasedDate: "12/06/1970" },
  { id: 6, name: "Raja", rating: "10", releasedDate: "12/06/1970" },
  { id: 7, name: "current", rating: "10", releasedDate: "12/06/1970" },
  { id: 8, name: "Jai Balaya", rating: "10", releasedDate: "12/06/1970" },
  { id: 9, name: "Arya 1", rating: "10", releasedDate: "12/06/1970" },
  { id: 10, name: "Arya 2", rating: "10", releasedDate: "12/06/1970" },
  { id: 11, name: "Arya 3", rating: "10", releasedDate: "12/06/1970" },
  { id: 12, name: "Arya 3", rating: "10", releasedDate: "12/06/1970" },
  { id: 13, name: "current", rating: "10", releasedDate: "12/06/1970" },
  { id: 14, name: "current", rating: "10", releasedDate: "12/06/1970" },
  { id: 15, name: "current", rating: "10", releasedDate: "12/06/1970" },
  { id: 16, name: "current", rating: "10", releasedDate: "12/06/1970" },
  { id: 17, name: "spy", rating: "10", releasedDate: "12/06/1970" },
  { id: 18, name: "Maharshi", rating: "10", releasedDate: "12/06/1970" },
  { id: 19, name: "Major", rating: "10", releasedDate: "12/06/1970" },
  { id: 20, name: "Barfi", rating: "10", releasedDate: "12/06/1970" },
];

app.get("/getMovies", (req, res) => {
  res.json({ Status: 200, data: moviesData });
});

app.post("/createmovie", (req, res) => {
  const newData = {
    id: moviesData.length + 1,
    name: req.body.name,
    rating: req.body.rating,
    releasedDate: req.body.releasedDate,
  };
  moviesData.push(newData);
  res.json({
    Status: 200,
    data: req.body,
    message: "Movie Added successfully",
  });
});

app.listen(4000, () => console.log("app is listening on port 4000"));
