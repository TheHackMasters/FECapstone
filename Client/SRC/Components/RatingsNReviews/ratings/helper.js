const numReviews = (ratings) => {
  let reviewCount = 0;
  const ratingKeys = Object.keys(ratings);

  // ratings object
  //   - key is the rating
  //   - value is the number of reviews that rate at this number
  ratingKeys.forEach((rating) => {
    reviewCount += Number(ratings[rating]);
  });

  return reviewCount;
};

const totalScore = (ratings) => {
  let total = 0;
  const ratingKeys = Object.keys(ratings);

  // ratings object : { 3: '2', 4: '1', 5: '1'}
  // total score = 3*2 + 4*1 + 5*1
  ratingKeys.forEach((rating) => {
    total += Number(rating) * Number(ratings[rating]);
  });

  return total;
};

const averageRating = (ratings) => totalScore(ratings) / numReviews(ratings);

const starRating = (ratings) => Math.round(totalScore(ratings)) / numReviews(ratings);

module.exports = {
  averageRating,
  starRating,
};
