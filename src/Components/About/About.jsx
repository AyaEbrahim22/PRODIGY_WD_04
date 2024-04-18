import style from './About.module.css'
import img from '../../Assets/AboutPhoto.png'
import {Slide, Zoom } from "react-awesome-reveal";

export default function About() {


    return <>
 
      <Zoom>
        <div id='about'className={style.aboutComponent}>
            <div className='container'>
                 
                <div className={style.boxShadow}>
                    <div className='row g-4'>
                        <div className='col-md-6'>
                            <div className='row mt-3 gy-2'>
                                <div className='col-md-6 d-flex justify-content-center'>
                                    <div>
                                        <img src={img} alt='' className={style.aboutPhoto} />
                                    </div>

                                </div>

                                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                                    <div className='text-dark-emphasis'>
                                        <div className='mb-2'><span className={style.info}>Name: </span><span>Aya Ebrahim</span><br /></div>
                                        <div className='mb-2'><span className={style.info}>Title: </span><span>Front end web developer</span><br /></div>
                                        <div className='mb-2'><span className={style.info}>Available for: </span><span>Full Time Work</span><br /></div>
                                        <div className='mb-2'><span className={`${style.info}`}>Prefer: </span><span>Onsite work</span><br /></div>

                                       <button className={style.resume}><a href='https://drive.google.com/drive/folders/1B1703BfWsOLY429Wd0V_T02A6QubeBiT?usp=sharing' target="_blank" rel="noreferrer" className='text-light'>Resume <i className="fa-solid fa-download"></i></a></button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className='mt-4 text-dark-emphasis'>Skills</h4>
                              
                                <span className='text-dark-emphasis'>HTML5</span>
                               <div className={style.progressParent}>
                                <Slide>
                                <div className={`${style.progressCompleted} ${style.PW98} `}>
                                 <span className='me-2 text-light'>98%</span>
                                </div>
                                </Slide>
                               </div>

                               <span className='text-dark-emphasis'>CSS3</span>
                               <div className={style.progressParent}>
                                <Slide>
                                <div className={`${style.progressCompleted} ${style.PW95} `}>
                                 <span className='me-2 text-light'>95%</span>
                                </div>
                                </Slide>
                               </div>

                               <span className='text-dark-emphasis'>JavaScript</span>
                               <div className={style.progressParent}>
                                <Slide>
                                <div className={`${style.progressCompleted} ${style.PW97} `}>
                                 <span className='me-2 text-light'>97%</span>
                                </div>
                                </Slide>
                               </div>

                               <span className='text-dark-emphasis'>React js</span>
                               <div className={style.progressParent}>
                                <Slide>
                                <div className={`${style.progressCompleted} ${style.PW90} `}>
                                 <span className='me-2 text-light'>90%</span>
                                </div>
                                </Slide>                             
                               </div>
                              
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div>
                                <h2 className={`${style.title} ms-2 mb-3`}>About me</h2>
                                <p className={style.parag}>I am a dedicated <span className={style.animate}> front-end web developer </span> with a Bachelor's degree in Computer Science. My expertise lies in HTML, HTML5, CSS, CSS3, JavaScript, jQuery, React.js, and Bootstrap. Although I have limited professional experience, I have completed a comprehensive front-end development course with route where I successfully completed around 15 projects</p>

                                <p className={style.parag}>What sets me apart is my genuine passion and love for the field. I find immense joy in working on projects, and I can spend hours engrossed in coding without getting bored. I am driven by the desire to constantly improve and deliver high-quality work efficiently.</p>

                                <p className={style.parag}>While my professional journey is just beginning, I am eager to gain more experience and collaborate on exciting projects. I am open to new challenges and opportunities that will help me further enhance my skills and contribute to the growth of organizations. If you have a project in mind, let's connect and create remarkable web experiences together.</p>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        </Zoom>

    </>
}
