import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isShowLoader, setIsShowLoader] = useState(false);

  useEffect(() => {
    const fetchReviews = async id => {
      try {
        setIsShowLoader(true);
        const movieCast = await getMovieCredits(id);
        setCast([...movieCast]);
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
          {cast.length
            ? cast.map(actor => {
                return (
                  <li key={actor.id}>
                    <img
                      src={
                        actor.profile_path &&
                        `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                      }
                      alt={actor.name}
                      width="100"
                    />
                    <p>{actor.name}</p>
                    <p>{actor.character}</p>
                  </li>
                );
              })
            : 'no Cast'}
        </ul>
      )}
    </>
  );
};

export default Cast;
