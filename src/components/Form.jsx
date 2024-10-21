export const Form = () => {
  return (
    <>
      <h2>Dodaj recenzję</h2>
      <form action=''>
        <div>
          <div>
            <label htmlFor='author'>Autor</label>
          </div>
          <input type='text' name='author' id='author' />
        </div>
        <div>
          <div>
            <label htmlFor='text'>Tekst</label>
          </div>
          <textarea name='text' id='text'></textarea>
        </div>
        <button type='submit'>Dodaj</button>
      </form>
    </>
  );
};
