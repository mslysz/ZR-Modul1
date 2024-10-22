import { useState } from 'react';

export const Form = ({ onReviewSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const author = inputValue;
    const text = textareaValue;

    onReviewSubmit(author, text);
    setInputValue('');
    setTextareaValue('');
  }

  return (
    <>
      <hr />

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
