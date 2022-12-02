import React, { useEffect } from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import ActivitiesCard from './ActivitiesCard';
import '../../styles/Carousel.css';
import store from '../../redux/configureStore';
import { getFitnessActivites } from '../../redux/actions/fitness-activities';

export default function ActivitiesList() {
  const activites = useSelector((state) => state.fitnessActivities);

  useEffect(() => {
    store.dispatch(getFitnessActivites());
  }, []);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  let SlideToShowNumber = 1;
  if (mdUp) {
    SlideToShowNumber = 2;
  }
  if (lgUp) {
    SlideToShowNumber = 3;
  }
  return (
    <>
      <div className="home-header">
        <h2 className="h2 text-center mt-5 text-uppercase">
          <strong>Fitness Activities</strong>
        </h2>
        <p className="fs-5 text-center text-muted mb-5">
          Please select Your desired Service
        </p>
      </div>
      <div>
        <div className="home-body ">
          <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
              <button type="button" onClick={previousSlide}>
                <i className="fa-solid fa-caret-left" />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button type="button" onClick={nextSlide}>
                <i className="fa-solid fa-caret-right" />
              </button>
            )}
            className="Activities-carousel"
            wrapAround
            slidesToShow={SlideToShowNumber}
            renderBottomCenterControls={false}
          >
            {activites.fitnessActivities?.data.map((activity) => (
              <ActivitiesCard
                key={activity.id}
                FitnessActivityName={activity.attributes.name}
                Description={activity.attributes.description}
                price={activity.attributes.amount}
                picture={activity.attributes['images-urls'][0]}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
