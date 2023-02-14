import back from './images/back.png'
import './App.css';
import logo from './images/Ellipse.png'
import image from './images/Rectangle.jpg'
import feature1 from './images/features-1.png'
import feature2 from './images/feature-2.png'
import feature3 from './images/feature-3.png'
import anh1 from './images/anh1.png'
import anh2 from './images/anh2.png'
import anh3 from './images/anh3.png'
import anh4 from './images/anh4.png'
import email from './images/logo/mail.png'
import phone from './images/logo/phone.png'
import address from './images/logo/address.png'
import sound from './images/logo/sound.png'
import insta from './images/logo/insta.png'
import facebook from './images/logo/facebook.png'
import edit from './images/logo/edit.png'
import { useState } from 'react';
function App() {

  const [newProject, setNewProject] = useState({
    name: "Gembucket",
    keyword: ['solar_breeze',
      'red_hold',
      'card_guard',
      'lotstring',
      'tough_joy_fax',
      'cardify'],
    sumary: "Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio	feugiat non pretium quis lectus suspendisse.,",
    website: "https://gembucket.com",
  }

  );
  // const [description, setDescription] = useState("");
  const [isHidden, setIsHidden] = useState(true);
  const [name, setName] = useState("Gembucket");
  const [keyword, setKeyword] = useState("");
  const [sumary, setSumary] = useState("Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio	feugiat non pretium quis lectus suspendisse.");
  const [website, setWebsite] = useState("https://gembucket.com");
  const handleSubmi = (e) => {
    e.preventDefault();
    setNewProject({
      name: name,
      keyword: keyword,
      sumary: sumary,
      website: website,
    })
    setIsHidden(true);
  }
  console.log(newProject.keyword);
  console.log(isHidden  )

  const openForm = (e) => {
    e.preventDefault();
    setIsHidden(false);
  }
  const handleCancle = (e) => {
    e.preventDefault();
    setIsHidden(true);
  }
  return (
    <>
      <body className=' font-bold font-Manjari max-w-max-screen bg-bg  text-xam  '>
        <header className=''>
          <div className='flex justify-start h-32 items-center gap-10'>
            <div className='inline-block text-center ml-[127px]'><img src={back} alt="Logo" /></div>
            <div className='inline-block text-center'><img src={logo} alt="Logo" /></div>
            <div className='inline-block text-left'>
              <h5 className='text-den leading-26.37'>Pattie Trusdale<h5 className='text-xam leading-19.78'>
                Full-stack Developer</h5></h5>
            </div>
            <button className='text-center inline-block bg-do capitalize w-32 h-8 text-white rounded-large' value={'here'}>HERE</button>
          </div>
        </header>
        <main className='ml-234'>
          <h1 className='text-den  text-5xl font-bold'>{newProject.name} <span onClick={openForm}>
            <img className='inline-block float-right cursor-pointer bg-[rgb(0,0,0,0.2)] rounded-full mr-5 ' src={edit} alt="Logo" />
          </span></h1>
          <form className='left-[25%] z-50 bg-#F3F3F3 w-772  fixed  ' hidden={isHidden} onSubmit={handleSubmi}>
            <div className='mx-auto w-702 top-[46px] '>
              <label className='font-Manjari text-3xl mr-10 mb-10  inline-block mt-10  '>Project:   </label><br></br>
              <label className='font-Manjari text-2xl'>Name <span className='text-blue-300'>*</span>    </label>
              <input
                className='w-702 h-7 border-2 border-#AEAEAE mb-7'
                type="text"

                onChange={(e) => setName(e.target.value)}

                name="name" />
              {/* Keywords */}
              <label className='font-Manjari text-2xl'>Keywords   </label>

              <input
                className='w-702 h-7 border-2 border-#AEAEAE  block'
                type="text"
                placeholder=''
                onChange={(e) => setKeyword(e.target.value)}
                name="keyword" />
              <button className='inline-block mb-10 p-2 border-[1px] bg-white rounded-[4px] leading-[14px]  items-center'>#{newProject.keyword[0]}<span className='text-red-500'>x</span></button>
              <button className='inline-block mb-10 p-2 border-[1px] bg-white rounded-[4px] leading-[14px] items-center'>#{newProject.keyword[1]}<span className='text-red-500'>x</span></button>
              <button className='inline-block mb-10 p-2 border-[1px] bg-white rounded-[4px] leading-[14px] items-center'>#{newProject.keyword[2]}<span className='text-red-500'>x</span></button>
              <button className='inline-block mb-10 p-2 border-[1px] bg-white rounded-[4px] leading-[14px] items-center'>#{newProject.keyword[3]}<span className='text-red-500'>x</span></button>
              <button className='inline-block mb-10 p-2 border-[1px] bg-white rounded-[4px] leading-[14px] items-center'>#{newProject.keyword[4]}<span className='text-red-500'>x</span></button>
              <button className='inline-block mb-10 p-2 border-[1px] bg-white rounded-[4px] leading-[14px] items-center'>#{newProject.keyword[5]}<span className='text-red-500'>x</span></button>

              <label className='font-Manjari text-2xl block '>Summary <span className='text-blue-300'>*</span>    </label>
              <textarea
                className='w-702  border-2 border-#AEAEAE'
                type="text"
                onChange={(e) => setSumary(e.target.value)}
                placeholder=''
                name="email" />

              <label className='font-Manjari text-2xl'>Website  </label>  <br></br>
              <input
                className='w-400 h-7 border-2 border-#AEAEAE'
                type="text"
                placeholder=''
                onChange={(e) => setWebsite(e.target.value)}
                name="email" />
              <button className='text-#18C4EE'>
                Remove
              </button>
              <br></br>
              <button className='text-#18C4EE'>
                Add another website
              </button>
              <br></br>
              <div className='float-right'>
                <button className='mr-5' onClick={handleCancle}>
                  Cancel
                </button>
                <button type='submit' className='bg-#18C4EE rounded-md text-white p-2'>
                  Save
                </button></div>

            </div>
          </form>
          <div className=' '>

            <strong className='nxt-top-hashtag indent-0'>#solar_breeze </strong>
            <strong className='nxt-top-hashtag'>#red_hold </strong>
            <strong className='nxt-top-hashtag'>#card_guard </strong>
            <strong className='nxt-top-hashtag'>#lotstring </strong>
            <strong className='nxt-top-hashtag'>#tough_joy_fax </strong>
            <strong className='nxt-top-hashtag'>#cardify </strong>
          </div>
          <p value="12">{newProject.sumary}</p>
          <h2>Official site: <a className='text-#18C4EE' href='https://gembucket.com'><p className='inline indent-10'>{newProject.website}</p></a></h2>
          <img className='w-972 h-480 mt-85' src={image} alt="Logo" />
          {/* Description */}
          <div className='description mt-150 '>
            <h1 className='text-4xl text-den'>Description
              <span onClick="">
                <img className='inline-block float-right cursor-pointer bg-#FFFFFF rounded-full mr-5 ' src={edit} alt="Logo" />
              </span>
            </h1>
            <ul className='list-disc text-[18px]'>
              <li>Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel nasand praesent blandit lacinia erat vestibulum sed.</li>
              <li>Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</li>
              <li>Liam neque vestibulum eget vulputate ut ultrices vel.</li>
            </ul>
          </div>
          {/* features */}
          <div className='features  mt-102  '>
            <h1 className='text-4xl  text-den '>Features<span onClick="">
              <img className='inline-block float-right cursor-pointer bg-#FFFFFF rounded-full mr-5 ' src={edit} alt="Logo" />
            </span></h1>
            <div className='block user-research mx-auto  w-656  h-271 mt-10- '>
              <img className='z-0 w-271 h-271  absolute ' src={feature1} alt="Logo" />
              <div className='z-40 my-auto relative w-572 border-solid  items-center float-right  border-b border-#074F6380 mt-10 '>
                <h2 className=' text-white z-40 text-center bg-#074F6380  font-bold '><span className=''>User research</span></h2>
                <p className='mr-102 pt-5 pb-5 my-auto float-right  text-justify leading-5 w-268 '>Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam sit amet aliquam dieam earn magna bibendum imperdiet nullam orci pede.</p>
              </div>
            </div>
            <div className='getting-stakeholder mt-10  mx-auto  w-656  h-271'>
              <img className='w-271 h-271 absolute float-right ml-350' src={feature2} alt="Logo" />
              <div className='z-40 my-auto relative w-572 border-solid  float-right border-b border-#074F6380 mt-10 '>
                <h2 className='text-white z-40 text-left bg-#074F6380  font-bold indent-102 '><span className=''>  Getting stakeholder</span></h2>
                <p className='pt-5 pb-5 my-auto float-left  text-justify leading-5 w-268 '>Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu libero rustrum sempereed ac lobortis vel dapibus at.</p>
              </div>
            </div>
            <div className='user-interaction mt-10    mx-auto  w-656  h-271'>
              <img className='w-271 h-271 absolute' src={feature3} alt="Logo" />
              <div className='z-40 my-auto relative w-572 border-solid  items-center float-right  border-b border-#074F6380 mt-10 '>
                <h2 className='text-white z-40 text-center bg-#074F6380  font-bold '>User interaction</h2>
                <p className='mr-102 pt-5 pb-5 float-right  text-justify leading-5 w-268 '>Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum praesent blandit lacinia erat vestibulum sed at magna.</p>
              </div>
            </div>

          </div>
          {/* team member */}
          <div className='team-member mt-150 '>
            <h1 className='text-4xl text-den  '>  Team-members </h1>
            <div className='mt-102   '>
              <div className=' flex '>
                {/* box-border border-2 border-074F63 */}
                <div className=' box-1 basis-1/2 h-288 '>

                  {/* <h2 className=' text-074F63 text-center 
                     after:inline-block after:absolute after:bg-074F63 after:w-14 after:h-0.5 after:mt-2 after:ml-4
                     before:block before:absolute before:bg-074F63 before:w-14 before:h-0.5 before:mt-2 before:ml-178px
                     '>
                    <span >Antons Playden  </span></h2> */}
                  <img className=' w-288 h-288 mx-auto ' src={anh1} alt="Logo" />
                  {/* <h2 className=' text-074F63 text-center  bg-violet-700 inline-block w-[150-px] rotate-90
                     after:inline after:absolute after:bg-074F63 after:w-14 after:h-0.5  after:mt-2 
                     before:inline-block before:relative before:bg-074F63 before:w-14 before:h-0.5  
                     '>Dental Hygienist</h2> */}

                </div>
                <div className='box-2 basis-1/2   '>
                  {/* <h2 className='  text-074F63 text-center 
                             after:inline-block after:absolute after:bg-074F63 after:w-14 after:h-0.5 after:mt-2 after:ml-4
                             before:block before:absolute before:bg-074F63 before:w-14 before:h-0.5 before:mt-2 before:ml-5
                      '>
                    <span className='bg-black'>Lowe Coronas	</span></h2> */}
                  <img className='w-288 h-288 mx-auto' src={anh2} alt="Logo" />
                </div>
                + </div>
              <div className=' flex mt-10 '>
                {/* box-border border-2 border-074F63 */}
                <div className=' box-1 basis-1/2 h-288   '>
                  <div className='mx-auto w-288 h-288  '>
                    {/* <h2 className='  text-074F63 text-center  '>
                      <span className=''>Galvan Bonifas</span></h2> */}
                    <img className='w-288 h-288 ' src={anh3} alt="Logo" />
                  </div>

                </div>
                <div className='box-2 basis-1/2  '>
                  <div className='mx-auto w-288 h-288  '>
                    {/* <h2 className=' text-074F63 text-center '>
                      <span>Lowe Coronas	</span></h2> */}
                    <img className='w-288 h-288 ' src={anh4} alt="Logo" />

                  </div>
                </div>
              </div>


            </div>
          </div>
          {/* contact */}
          <div className='contact   '>
            <h2 className='text-4xl text-den mt-271 '>Want to know more, contact me!</h2>

            <div className='flex mt-102 '>
              <div className='left-contact bg-#FFFFFF basis-1/2 text-justify indent-102 leading-10 '>
                <div className=''>
                  <img className='inline-block' src={email} alt="Logo" />
                  <h3 className='inline-block indent-5'> pattietrusdale@gmail.com</h3> </div>
                <div className=''>
                  <img className='inline-block' src={phone} alt="Logo" />
                  <h3 className='inline-block indent-5'>  +8421 223 2234</h3> </div>
                <div className=''>
                  <img className='inline-block' src={address} alt="Logo" />
                  <h3 className='inline-block indent-5'>34 Milwaukee Avenue</h3> </div>
              </div>
              <div className='right-contact basis-1/2 leading-10'>
                <div className=''>
                  <img className='inline-block' src={sound} alt="Logo" />
                  <h3 className='inline-block indent-5'>github.com/pattietrusdale</h3> </div>
                <div className=''>
                  <img className='inline-block' src={insta} alt="Logo" />
                  <h3 className='inline-block indent-5'>linkedin.com/in/pattie-trusdale-34...</h3> </div>
                <div className=''>
                  <img className='inline-block' src={facebook} alt="Logo" />
                  <h3 className='inline-block indent-5'>facebook.com/pattie.trusdale</h3> </div>
              </div>
            </div>
          </div>
        </main>
        <footer className='flex mt-20 justify-around bg-#007893 h-16 top-16 ml-234 font-Nunito font-normal text-white'>
          <div className='m-auto'>Copyright 2019 © Academic System</div>
          <div className='m-auto'>Designed & Developed by Quang Dat Pham-</div>
        </footer>
      </body>

    </>
  );
}

export default App;
