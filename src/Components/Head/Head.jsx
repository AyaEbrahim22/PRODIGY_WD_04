import style from './Head.module.css'
import img from '../../Assets/HeadPhoto.png'
import { ReactTyped } from "react-typed";

export default function Head() {


  return <>


    <div id='home' className={style.headComponent}>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-6 mt-5 pt-2'>
            <div>

              <ReactTyped
                strings={[
                  " Front-end developer",
                  " Ui developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              >
                <input type="text" className={style.frontTitle} />
              </ReactTyped>

              <h1 className='mb-4 text-light'><span className={style.hello}>Hello</span>, my name is<br />Aya Ebrahim</h1>
              <p className='mb-4 text-light'>Talented front-end developer with a passion for creating captivating web experiences. I strive to deliver visually stunning and user-friendly websites. Committed to staying up-to-date with the latest industry trends and continuously enhancing my skills.</p>

              <div>
                <button className={`${style.btn} me-3`}><a href='https://github.com/AyaEbrahim22' target='_blank'>PROJECTS</a></button>
                <button className={style.btn}><a href='https://www.linkedin.com/in/aya-ebrahim/' target='_blank'>LINKEDIN</a></button>
              </div>

            </div>
          </div>
          <div className='col-md-6'>
            <div className='d-flex align-items-center justify-content-end'>

              <img src={img} alt='' className={style.Photo} />

            </div>
          </div>
        </div>
      </div>
    </div>

  </>

}
