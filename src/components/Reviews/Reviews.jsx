import { movieReviews } from 'components/ServiceAPI/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [review, setRewiew] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getRewiews() {
      try {
        const movieReview = await movieReviews(movieId);
        setRewiew(movieReview.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getRewiews();
  }, [movieId]);
  console.log(review);
  return (
    <>
      {/* {review.length !== 0 && (
        <div>
          <ul>
            {review.map(({ author, content, id }) => (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {review.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )} */}
      {/* <div>
        {review.map(({ author, content, id }) => (
          <div>
            {review.length > 0 ? (
              <ul>
                <li key={id}>
                  <h3>{author}</h3>
                  <p> {content} </p>
                </li>
              </ul>
            ) : (
              <p>We don't have any reviews for this movie</p>
            )}
          </div>
        ))}
      </div> */}
      <div>
        {review.length > 0 ? (
          <ul>
            {review.map(({ author, content, id }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p> {content} </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </div>
    </>
  );
};

export default Reviews;
