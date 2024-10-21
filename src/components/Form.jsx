import { useState } from 'react';
import { Review } from './Review';
const initialReviews = [
  { author: 'Brian', text: 'Najlepszy film ever!', id: 1 },
  { author: 'Amanda', text: 'Widziałam lepsze filmy', id: 2 },
];

export const Form = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const reviewsElements = reviews.map((r) => (
    <Review key={r.id} author={r.author} text={r.text} />
  ));

  function handleSubmit(e) {
    e.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    setReviews((prevReviews) => {
      return [{ author, text, id: prevReviews.length + 1 }, ...prevReviews];
    });
    setInputValue('');
    setTextareaValue('');
  }

  return (
    <>
      <hr />
      <ul>{reviewsElements}</ul>

      <h2>Dodaj recenzję</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor='author'>Autor</label>
          </div>
          <input
            type='text'
            name='author'
            id='author'
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </div>
        <div>
          <div>
            <label htmlFor='text'>Tekst</label>
          </div>
          <textarea
            name='text'
            id='text'
            value={textareaValue}
            onChange={(e) => {
              setTextareaValue(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          type='submit'
          //the form can only be sent when the input and textarea fields are filled in
          disabled={inputValue === '' || textareaValue === ''}
        >
          Dodaj
        </button>
      </form>
    </>
  );
};
