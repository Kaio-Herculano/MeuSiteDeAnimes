import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCarousel = styled.div``;

const CarouselCard = styled.div`
  display: flex;
  flex: 1;
  position: absolute;
  width: 75%;
  height: 26%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.15);
  opacity: 0;
  pointer-events: none;
  transform: scale(0.8);
  transition: 0.5s ease-in-out;
  justify-content: flex-end;
  margin-left: 14%;
  align-items: flex-start;

  @media (max-width: 800px) {
    margin-left: 14%;
  }

  &.carousel_card-active {
    opacity: 1;
    pointer-events: visible;
  }
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  @media (max-width: 800px) {
    width: 100%;
    height: 25%;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  padding: 10px 0px;
  margin-top: 9%;
  @media (max-width: 800px) {
    margin-top: 85px;
  }
`;

const CardTitle = styled.h2`
  color: #d094ff;
  font-size: 20px;
  margin-left: 5%;
`;

const CarouselPagination = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  margin-top: 15%;
`;

const PaginationDot = styled.div`
  height: 10px;
  width: 10px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &.pagination_dot-active {
    background-color: steelblue;
  }
`;

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =

      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [autoPlay, current, images]);

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <StyledCarousel
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <>
        {images.map((image, index) => (
          <CarouselCard
            key={index}
            className={index === current ? "carousel_card-active" : ""}
          >
            <CardImage src={image.image} alt="" />
            <CardOverlay>
              <CardTitle>{image.title}</CardTitle>
            </CardOverlay>
          </CarouselCard>
        ))}

        <CarouselPagination>
          {images.map((_, index) => (
            <PaginationDot
              key={index}
              className={index === current ? "pagination_dot-active" : ""}
              onClick={() => setCurrent(index)}
            />
          ))}
        </CarouselPagination>
      </>
    </StyledCarousel>
  );
}

export default Carousel;
