const getRecommendations = async (req, res) => {
  const { userId } = req.params;

  // Mock logic: always return these movies for now
  const recommended = [
    { title: "Inception", genre: "Sci-Fi" },
    { title: "Interstellar", genre: "Sci-Fi" },
    { title: "The Matrix", genre: "Sci-Fi" }
  ];

  res.json({ userId, recommended });
};

module.exports = { getRecommendations };
