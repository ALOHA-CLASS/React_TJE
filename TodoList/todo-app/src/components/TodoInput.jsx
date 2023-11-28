import React from 'react'

const TodoInput = ( { input, onChange, onSubmit } ) => {
  return (
    <div>
        <form onSubmit={onSubmit} className='form'>
            <input placeholder='할 일 입력' value={input} onChange={onChange} className='input'  />
            <button type='submit' className='btn'>추가</button>
        </form>
    </div>
  )
}

export default TodoInput