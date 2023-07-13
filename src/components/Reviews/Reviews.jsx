import { Loader } from 'components/Loader/Loader';
import { movieReviews } from 'components/ServiceAPI/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [review, setRewiew] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getRewiews() {
      try {
        setLoading(true);
        const movieReview = await movieReviews(movieId);
        setRewiew(movieReview.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    getRewiews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
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
