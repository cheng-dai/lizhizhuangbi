import Sidebar from './ui/components/SideMenu';
import lizhi from './assets/lizhi.jpg';

function App() {
  return (
    <>
      <img
        src={lizhi}
        className='object-cover min-h-[100vh] -z-10 grayscale absolute top-0'
      />
      <h1 className='m-4 text-2xl font-semibold tracking-wide'>
        Lizhizhuangbi
      </h1>

      <main>
        <Sidebar className='right-0  min-h-[100vh] bg-[#831d14] ' />
        <div className='mx-4'>
          {/* <a
            href='https://m.weibo.cn/u/5976663270?t=&luicode=10000011&lfid=100103type%3D1%26q%3Dasdzxc'
            target='_blank'
          >
            weibo
          </a> */}
        </div>
      </main>
    </>
  );
}

export default App;
