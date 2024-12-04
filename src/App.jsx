import banner from '/src/assets/images/illustration-article.svg';
import profilePicture from '/src/assets/images/image-avatar.webp'

function App() {

  return (
    <>
      <main className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col justify-center items-start bg-accentColor w-[375px] p-5 mx-5 md:mx-0 border border-primaryText rounded-md cont-shadow">
          <img src={banner} alt="card art" className="w-full rounded-md"/>
          <p className="bg-primaryColor font-extrabold text-sm py-[7px] px-3.5 rounded-md mt-6">Learning</p>
          <div className="mt-4 mb-6">
            <p className="text-sm">Published 21 Dec 2023</p>
            <h1 className='font-extrabold text-xl md:text-2xl my-3.5 hover:text-primaryColor transition-colors duration-200 ease-in-out cursor-pointer'>HTML & CSS foundations</h1>
            <p className="text-sm md:text-base text-accentText">These languages are the backbone of every website, defining structure, content, and presentation.</p>
          </div>
          <div className="flex justify-center items-center gap-2.5">
            <img src={profilePicture} alt="Profile Picture of Greg Hooper" className='w-8'/>
            <p className='font-bold text-sm'>Greg Hooper</p>
          </div>
        </div>
      </main>
      <footer className='bg-primaryText text-accentColor text-center py-2.5'>
        <div>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='text-blue-500 underline underline-offset-2 cursor-pointer'>Frontend Mentor</a>. 
          Coded by <a href="https://www.baileykh.dev" target="_blank" className='text-blue-500 underline underline-offset-2 cursor-pointer'>Bailey Henderson</a>.
        </div>
      </footer>
    </>
  )
}

export default App
