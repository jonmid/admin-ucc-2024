import Navbar from './components/navbar';
import Home from './screens/Home';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
      <Navbar />
      <section className='flex-1 grid grid-rows-[auto_1fr_auto]'>
        <header className='bg-blue-300'>Header</header>
        <section className='bg-red-300'>
          <Home />
          {/* <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/marketplace' element={<Marketplace />} />
            <Route path='/tables' element={<Tables />} />
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='*' element={<NotFound />} />
          </Routes> */}
        </section>
        <footer className='bg-green-300'>
          <p>footer</p>
        </footer>
      </section>
    </main>
  );
}

export default App;
