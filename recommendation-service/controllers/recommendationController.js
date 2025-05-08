const axios = require('axios');

exports.getRecommendations = async (req, res) => {
  try {
    const userId = req.params.userId;
    const reviewsRes = await axios.get(`http://localhost:5002/api/reviews/user/${userId}`);
    const reviews = reviewsRes.data;

    const topGenres = {};
    reviews.forEach(r => {
      if (!topGenres[r.genre]) topGenres[r.genre] = 0;
      topGenres[r.genre] += r.rating;
    });

    const sortedGenres = Object.keys(topGenres).sort((a, b) => topGenres[b] - topGenres[a]);
    const recommendedMovies = [];

    for (let genre of sortedGenres.slice(0, 2)) {
      const movieRes = await axios.get(`http://localhost:5001/api/movies?genre=${genre}`);
      recommendedMovies.push(...movieRes.data);
    }

    res.json(recommendedMovies);
  } catch (err) {
    res.status(500).json({ message: 'Error generating recommendations' });
  }
};