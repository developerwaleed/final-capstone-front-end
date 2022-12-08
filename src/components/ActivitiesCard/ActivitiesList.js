import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import ActivitiesCard from './ActivitiesCard';
import '../../styles/Carousel.css';

const ActivitiesList = () => {
  const activities = useSelector((state) => state.fitnessActivities.fitnessActivities);
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const numberOfActivities = activities.data?.length;

  let SlideToShowNumber = 1;
  if (mdUp && numberOfActivities >= 2) {
    SlideToShowNumber = 2;
  }
  if (lgUp && numberOfActivities >= 2) {
    SlideToShowNumber = 2;
  }
  if (lgUp && numberOfActivities >= 3) {
    SlideToShowNumber = 3;
  }
  return (
    <>
      <div className="home-header">
        <h2 className="h2 text-center mt-5 text-uppercase">
          <strong>Fitness Activities </strong>
        </h2>
        <p className="fs-5 text-center text-muted mb-5">
          Please select Your desired Service
        </p>
      </div>
      { numberOfActivities > 0
        ? (
          <div>
            <div className="home-body">
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
                className=""
            // wrapAround
                slidesToShow={SlideToShowNumber}
                renderBottomCenterControls={false}
              >
                {activities?.data?.map((activity) => (
                  <ActivitiesCard
                    key={activity.id}
                    id={activity.id}
                    FitnessActivityName={activity.attributes.name}
                    Description={activity.attributes.description}
                    price={activity.attributes.amount}
                    picture={activity.attributes['images-urls'][0]}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        )
        : (
          <div className="no-reservation nav-link">
            <div>There is currently no Activity available !</div>
          </div>
        )}
    </>
  );
};

export default ActivitiesList;
