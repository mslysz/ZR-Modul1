import { Review } from './Review';

export const Reviews = ({ reviews }) => {
  const reviewsElements = reviews.map((r) => (
    <Review key={r.id} author={r.author} text={r.text} />
  ));

  return <ul>{reviewsElements}</ul>;
};
