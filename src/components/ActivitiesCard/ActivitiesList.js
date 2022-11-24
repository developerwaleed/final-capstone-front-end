import React from 'react';
import Carousel from 'nuka-carousel/lib/carousel';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ActivitiesCard from './ActivitiesCard';
import '../../styles/Carousel.css';

export default function ActivitiesList() {
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
      <h2 className="h2 text-center mt-5 text-uppercase">
        <strong>Fitness Activities</strong>
      </h2>
      <p className="fs-5 text-center text-muted mb-5">
        Please select Your desired Service
      </p>
      <div>
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
          <ActivitiesCard
            FitnessActivityName="Yoga"
            picture="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            Description="Yoga is the best thign someone can do...."
          />
          <ActivitiesCard
            FitnessActivityName="Yoga"
            picture="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            Description="Yoga is the best thign someone can do...."
          />
          <ActivitiesCard
            FitnessActivityName="Yoga"
            picture="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            Description="Yoga is the best thign someone can do...."
          />
          <ActivitiesCard
            FitnessActivityName="Yoga"
            picture="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            Description="Yoga is the best thign someone can do...."
          />
          <ActivitiesCard
            FitnessActivityName="Yoga"
            picture="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            Description="Yoga is the best thign someone can do...."
          />
          <ActivitiesCard
            FitnessActivityName="Yoga"
            picture="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            Description="Yoga is the best thign someone can do...."
          />
        </Carousel>
      </div>
    </>
  );
}
