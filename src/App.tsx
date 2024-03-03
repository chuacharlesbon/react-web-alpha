import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound';
import { useSelector } from 'react-redux';
import { selectUserLoading } from './redux/selectors/userSelectors';
import { Loading } from './Loading';
import AccordionExample from './components/bootstrap/accordion';
import { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import About from './pages/About/About';
import Home from './pages/Home/Home';

const App: FC<any> = () => {
  const userLoading = useSelector(selectUserLoading);
  const [myString, setString] = useState("initial");
  const [myString2, setString2] = useState("initial2");
  console.log(`app trigger at ${new Date()}`);
  return (
    <div className="bg-secondary min-h-screen">
      <AccordionExample />
      <Button variant="primary" onClick={() => setString(`string trigger`)}>
        update{myString}
      </Button>
      <Button variant="primary" onClick={() => setString2(`string2 trigger at ${new Date()}`)}>
        update2{myString2}
      </Button>
      <Routes>
        {userLoading ? <Route element={<Loading />} path="*" /> : <>

        </>}
        <Route path="/" element={<Home myData={myString} />} />
        <Route path="/about" element={<About myData={myString} />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
