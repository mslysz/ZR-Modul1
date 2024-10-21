import { useState } from 'react';

const initialReviews = [
  { author: 'Brian', text: 'Najlepszy film ever!', id: 1 },
  { author: 'Amanda', text: 'Widziałam lepsze filmy', id: 2 },
];

export const Form = () => {
  const [review, setReview] = useState(null);
  const [reviews, setReviews] = useState(initialReviews);
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  console.log(review);

  function handleSubmit(e) {
    e.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    setReview({ author, text });
  }

  console.log('Wartość zmiennej stanowej input:', inputValue);
  console.log('Wartość zmiennej stanowej textarea:', textareaValue);

  return (
    <>
      <hr />

      {review && (
        <article>
          <strong>{review.author}</strong>
          <p>{review.text}</p>
        </article>
      )}
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
