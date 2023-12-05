import './App.css';
import Button from './components/Button';
import CustomButton from './components/CustomButton';

function App() {

  const onClick = () => {
    alert('Clicked!')
  }

  return (
    <div className='container'>
      <h1>styled components</h1>
      <hr/>
      <h2>기본 버튼</h2>
      <Button />
      <Button id='btn' />
      <hr/>
      <h2>커스텀 버튼</h2>
      <h2>xs</h2>
      <CustomButton text='primary' btnStyle='primary' btnSize='xs'  onClick={onClick} />
      <CustomButton text='secondary' btnStyle='secondary' btnSize='xs'  onClick={onClick} />
      <CustomButton text='success' btnStyle='success' btnSize='xs'  onClick={onClick} />
      <CustomButton text='danger' btnStyle='danger' btnSize='xs'  onClick={onClick} />
      <CustomButton text='warning' btnStyle='warning' btnSize='xs'  onClick={onClick} />
      <CustomButton text='info' btnStyle='info' btnSize='xs'  onClick={onClick} />
      <CustomButton text='light' btnStyle='light' btnSize='xs'  onClick={onClick} />
      <CustomButton text='dark' btnStyle='dark' btnSize='xs'  onClick={onClick} />
      <h2>sm</h2>
      <CustomButton text='primary' btnStyle='primary' btnSize='sm'  onClick={onClick} />
      <CustomButton text='secondary' btnStyle='secondary' btnSize='sm'  onClick={onClick} />
      <CustomButton text='success' btnStyle='success' btnSize='sm'  onClick={onClick} />
      <CustomButton text='danger' btnStyle='danger' btnSize='sm'  onClick={onClick} />
      <CustomButton text='warning' btnStyle='warning' btnSize='sm'  onClick={onClick} />
      <CustomButton text='info' btnStyle='info' btnSize='sm'  onClick={onClick} />
      <CustomButton text='light' btnStyle='light' btnSize='sm'  onClick={onClick} />
      <CustomButton text='dark' btnStyle='dark' btnSize='sm'  onClick={onClick} />
      <h2>md</h2>
      <CustomButton text='primary' btnStyle='primary' btnSize='md'  onClick={onClick} />
      <CustomButton text='secondary' btnStyle='secondary' btnSize='md'  onClick={onClick} />
      <CustomButton text='success' btnStyle='success' btnSize='md'  onClick={onClick} />
      <CustomButton text='danger' btnStyle='danger' btnSize='md'  onClick={onClick} />
      <CustomButton text='warning' btnStyle='warning' btnSize='md'  onClick={onClick} />
      <CustomButton text='info' btnStyle='info' btnSize='md'  onClick={onClick} />
      <CustomButton text='light' btnStyle='light' btnSize='md'  onClick={onClick} />
      <CustomButton text='dark' btnStyle='dark' btnSize='md'  onClick={onClick} />
      <h2>lg</h2>
      <CustomButton text='primary' btnStyle='primary' btnSize='lg'  onClick={onClick} />
      <CustomButton text='secondary' btnStyle='secondary' btnSize='lg'  onClick={onClick} />
      <CustomButton text='success' btnStyle='success' btnSize='lg'  onClick={onClick} />
      <CustomButton text='danger' btnStyle='danger' btnSize='lg'  onClick={onClick} />
      <CustomButton text='warning' btnStyle='warning' btnSize='lg'  onClick={onClick} />
      <CustomButton text='info' btnStyle='info' btnSize='lg'  onClick={onClick} />
      <CustomButton text='light' btnStyle='light' btnSize='lg'  onClick={onClick} />
      <CustomButton text='dark' btnStyle='dark' btnSize='lg'  onClick={onClick} />
      <h2>xl</h2>
      <CustomButton text='primary' btnStyle='primary' btnSize='xl'  onClick={onClick} />
      <CustomButton text='secondary' btnStyle='secondary' btnSize='xl'  onClick={onClick} />
      <CustomButton text='success' btnStyle='success' btnSize='xl'  onClick={onClick} />
      <CustomButton text='danger' btnStyle='danger' btnSize='xl'  onClick={onClick} />
      <CustomButton text='warning' btnStyle='warning' btnSize='xl'  onClick={onClick} />
      <CustomButton text='info' btnStyle='info' btnSize='xl'  onClick={onClick} />
      <CustomButton text='light' btnStyle='light' btnSize='xl'  onClick={onClick} />
      <CustomButton text='dark' btnStyle='dark' btnSize='xl'  onClick={onClick} />
      <h2>block</h2>
      <CustomButton text='primary' btnStyle='primary' btnSize='block'  onClick={onClick} />
      <CustomButton text='secondary' btnStyle='secondary' btnSize='block'  onClick={onClick} />
      <CustomButton text='success' btnStyle='success' btnSize='block'  onClick={onClick} />
      <CustomButton text='danger' btnStyle='danger' btnSize='block'  onClick={onClick} />
      <CustomButton text='warning' btnStyle='warning' btnSize='block'  onClick={onClick} />
      <CustomButton text='info' btnStyle='info' btnSize='block'  onClick={onClick} />
      <CustomButton text='light' btnStyle='light' btnSize='block'  onClick={onClick} />
      <CustomButton text='dark' btnStyle='dark' btnSize='block'  onClick={onClick} />
    </div>
  );
}

export default App;
