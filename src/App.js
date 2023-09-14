import working_img from './young_women_working_with_laptop.png';
import app_view1 from './QWL_landing.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='first'>
        <div className="flex pt-32">
          <div className="w-1/2 px-44">
            <img src={working_img} className="working_img" alt="working_img" />
          </div>
          <div className="w-1/2 pt-20  pb-48 pl-16">
            <h1 className='text-8xl text-left'>“The key is not to prioritize what’s on your schedule, but to schedule your priorities.”</h1>
            <h4 className='text-4xl pt-8 text-left'>– Stephen Covey</h4>
          </div>
        </div>
      </div>
      <div className='second'>
        <div className="flex  ">
          <div className='w-1/2 flex justify-end'>
            <div className='w-3/5 pt-80 pb-48'>
              <h1 className='text-6xl text-center pb-4'>
                Measure Your Work Life Quality
              </h1>
              <button className="btn btn-secondary px-8">
                <p className='text-xl'>
                  Download App
                </p>
              </button>
            </div>
          </div>
          <div className="w-1/2 pl-20 pt-12 pb-12 flex">
            <img src={app_view1} className="app_view1" alt="app_view1" />
          </div>
        </div>
      </div>
      <footer class="footer p-10 bg-neutral text-neutral-content pl-24">
      <nav>
        <header class="footer-title">Contacts</header> 
        <p pclass="link link-hover">Prof.Sasmoko</p>
        <p class="link link-hover">sasmoko@binus.edu</p>
        <p class="link link-hover">Research Interest Group Leader</p>
        <p class="link link-hover">RIG Educational Technology Binus</p>
      </nav> 
      <nav>
        <header class="footer-title">Company</header> 
        <p class="link link-hover">RIG Educational Technology</p>
        <p class="link link-hover">Jl. K. H. Syahdan No. 9, Kemanggisan, Palmerah</p>
        <p class="link link-hover">Jakarta 11480 Indonesia</p>
        <p class="link link-hover">Phone +62 21 534 5830</p>
      </nav> 
    </footer>
    </div>
  );
}

export default App;
