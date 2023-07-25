import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setRewievs] = useState([]);
  const { movieId } = useParams();
  const [isShowLoader, setIsShowLoader] = useState(false);

  useEffect(() => {
    const fetchReviews = async id => {
      try {
        setIsShowLoader(true);
        const movieReviews = await getMovieReviews(id);
        setRewievs([...movieReviews]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsShowLoader(false);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);
  return (
    <>
      {isShowLoader ? (
        <Oval
          height={100}
          width={100}
          color="#404bbf"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#404bbf"
          strokeWidth={3}
          strokeWidthSecondary={3}
        />
      ) : (
        <ul>
          {reviews.length
            ? reviews.map(review => {
                return (
                  <li key={review.id}>
                    <h3>Author: {review.author}</h3>
                    <p>{review.content}</p>
                  </li>
                );
              })
            : 'no Reviews'}
        </ul>
      )}
    </>
  );
};

export default Reviews;
