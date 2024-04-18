
import style from './Projects.module.css'
import img1 from '../../Assets/FreshCartProject.png'
import img2 from '../../Assets/YummyProject.png'
import img3 from '../../Assets/WeatherProject.png'
import img4 from '../../Assets/PartyProject.png'
import img5 from '../../Assets/SmartLoginProject.png'
import img6 from '../../Assets/MealifyProject.png'
import img7 from '../../Assets/FokirProject.png'
import img8 from '../../Assets/DanielsProject.png'
import img9 from '../../Assets/DevfolioProject.png'
import img10 from '../../Assets/BakeryProject.png'
import img11 from '../../Assets/SocialApp.png'
import img12 from '../../Assets/XO.png'
import img13 from '../../Assets/NoteApp.png'
import {Slide} from 'react-awesome-reveal'

export default function Projects() {



   return <>
      <div id='project' className={style.projectComponent}>
         <div className='container'>
            <div className={style.componentShadow}>

               <h2 className={style.title}>Projects</h2>

               <div className="d-flex align-items-start justify-content-center mt-5">

                  <div className="tab-content" id="v-pills-tabContent">

                     {/* ****************All****************** */}
                     <div className="tab-pane fade show active" id="v-pills-all" role="tabpanel" aria-labelledby="v-pills-all-tab" tabindex="0">

                        <div className='row g-3'>

                           <div className='col-md-4' role='button'>

                              <Slide direction='up'>
                                 <a href='https://ayaebrahim22.github.io/FreshCart/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                    <img src={img1} className="card-img-top" alt='' height={180} />
                                    <div className="card-body text-center p-2">
                                       <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Fresh Cart <i className="fa-solid fa-cart-shopping"></i></h5>
                                    </div>
                                    <div className={style.icons}>
                                       <a href='https://github.com/AyaEbrahim22/FreshCart' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                       <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-thrilled-to-announce-activity-7168717664742162432-ZAyw?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                    </div>
                                 </a>
                              </Slide>
                           </div>

                           <div className='col-md-4' role='button'>
                              <Slide direction='up'>
                              <a href='https://ayaebrahim22.github.io/Yummy/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img2} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Yummy <i className="fa-solid fa-utensils"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/Yummy' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-excited-to-share-with-activity-7158211149035909120-1A6T?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                              </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                           <Slide direction='up'>
                           <a href='https://ayaebrahim22.github.io/weather/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img3} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Weather <i className="fa-solid fa-temperature-low"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/weather' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-excited-to-share-activity-7152793040691044352-zanQ?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                           </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                              <Slide direction='up'>
                              <a href='https://ayaebrahim22.github.io/Egyptian-Party/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img4} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Egyptian Party <i className="fa-solid fa-champagne-glasses"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/Egyptian-Party' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-excited-to-share-with-activity-7154460753167605760-d3If?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                              </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                            <Slide direction='up'>
                            <a href='https://ayaebrahim22.github.io/smart_Login/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img5} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Smart Login <i className="fa-solid fa-user-shield"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/smart_Login' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-happy-to-share-with-activity-7146831988652498944-TV0M?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                            </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                           <Slide direction='up'>
                           <a href='https://ayaebrahim22.github.io/Mealify/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img6} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Mealify <i className="fa-solid fa-burger"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/Mealify' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/activity-7128429595111870465-_m-Q?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                           </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                          <Slide direction='up'>
                          <a href='https://ayaebrahim22.github.io/Fokir/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img7} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Fokir <i className="fa-solid fa-user-tie"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/Fokir' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/activity-7126608993162080256-b7Go?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                          </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                             <Slide direction='up'>
                             <a href='https://ayaebrahim22.github.io/Daniels/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img8} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Daniels <i className="fa-solid fa-user-group"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/Daniels' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-glade-to-share-with-activity-7134134623558586368-G2WI?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                             </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                              <Slide direction='up'>
                              <a href='https://ayaebrahim22.github.io/DevFolio/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img9} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>DevFolio <i className="fa-solid fa-user"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/DevFolio' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/activity-7131984077896712192-9oXj?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                              </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                            <Slide direction='up'>
                            <a href='https://ayaebrahim22.github.io/firstProjectBakery/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img10} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Bakary <i className="fa-solid fa-bread-slice"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/firstProjectBakery' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/activity-7123641378059739137-Np0h?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                            </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                             <Slide direction='up'>
                             <a href='https://ayaebrahim22.github.io/SimpleSocialApp/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img11} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Social App <i className="fa-regular fa-share-from-square"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/SimpleSocialApp' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-i-am-happy-to-share-this-activity-7171653705782411265-6eGv?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                             </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                            <Slide direction='up'>
                            <a href='https://ayaebrahim22.github.io/PRODIGY_WD_03/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img12} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Tic-Tac-Toe <i className="fa-solid fa-trophy"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/PRODIGY_WD_03' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_prodigyinfotech-webdevelopment-frontendwebdevelopment-activity-7179150530982625280-XTpC?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                            </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                            <Slide direction='up'>
                            <a href='https://ayaebrahim22.github.io/NoteApp/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img13} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Note App <i className="fa-regular fa-note-sticky"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/NoteApp' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-this-is-a-simple-noteapp-activity-7174229617543704576-4BDK?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                            </Slide>

                           </div>

                        </div>

                     </div>

                     {/* ****************Initial****************** */}

                     <div className="tab-pane fade" id="v-pills-initial" role="tabpanel" aria-labelledby="v-pills-initial-tab" tabindex="0">

                        <div className='row g-3'>


                           <div className='col-md-4' role='button'>
                            <Slide direction='up'>
                            <a href='https://ayaebrahim22.github.io/firstProjectBakery/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img10} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Bakary <i className="fa-solid fa-bread-slice"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/firstProjectBakery' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/activity-7123641378059739137-Np0h?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                            </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                            <Slide direction='up'>
                            <a href='https://ayaebrahim22.github.io/Fokir/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img7} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Fokir <i className="fa-solid fa-user-tie"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/Fokir' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/activity-7126608993162080256-b7Go?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                            </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                            <Slide direction='up'>
                            <a href='https://ayaebrahim22.github.io/Daniels/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img8} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Daniels <i className="fa-solid fa-user-group"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/Daniels' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-glade-to-share-with-activity-7134134623558586368-G2WI?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                            </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                              <Slide direction='up'>
                              <a href='https://ayaebrahim22.github.io/DevFolio/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img9} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>DevFolio <i className="fa-solid fa-user"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/DevFolio' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/activity-7131984077896712192-9oXj?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                              </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                             <Slide direction='up'>
                             <a href='https://ayaebrahim22.github.io/Egyptian-Party/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img4} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Egyptian Party <i className="fa-solid fa-champagne-glasses"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/Egyptian-Party' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-excited-to-share-with-activity-7154460753167605760-d3If?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                             </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                             <Slide direction='up'>
                             <a href='https://ayaebrahim22.github.io/smart_Login/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img5} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Smart Login System <i className="fa-solid fa-user-shield"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/smart_Login' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-happy-to-share-with-activity-7146831988652498944-TV0M?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                             </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                             <Slide direction='up'>
                             <a href='https://ayaebrahim22.github.io/Mealify/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img6} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Mealify <i className="fa-solid fa-burger"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/Mealify' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/activity-7128429595111870465-_m-Q?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                             </Slide>

                           </div>


                        </div>

                     </div>

                     {/* ****************Advanced****************** */}
                     <div className="tab-pane fade" id="v-pills-advanced" role="tabpanel" aria-labelledby="v-pills-advanced-tab" tabindex="0">

                        <div className='row g-3'>

                           <div className='col-md-4' role='button'>
                            <Slide direction='up'>
                            <a href='https://ayaebrahim22.github.io/weather/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img3} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Weather <i className="fa-solid fa-temperature-low"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/weather' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-excited-to-share-activity-7152793040691044352-zanQ?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                            </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                             <Slide direction='up'>
                             <a href='https://ayaebrahim22.github.io/Yummy/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img2} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Yummy <i className="fa-solid fa-utensils"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/Yummy' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-excited-to-share-with-activity-7158211149035909120-1A6T?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                             </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                             <Slide direction='up'>
                             <a href='https://ayaebrahim22.github.io/NoteApp/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img13} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Note App <i className="fa-regular fa-note-sticky"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/NoteApp' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-this-is-a-simple-noteapp-activity-7174229617543704576-4BDK?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                             </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                             <Slide direction='up'>
                             <a href='https://ayaebrahim22.github.io/FreshCart/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img1} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Fresh Cart <i className="fa-solid fa-cart-shopping"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/FreshCart' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-thrilled-to-announce-activity-7168717664742162432-ZAyw?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                             </Slide>

                           </div>
                        </div>
                     </div>

                     {/*****************REACT************************ */}
                     <div className="tab-pane fade" id="v-pills-react" role="tabpanel" aria-labelledby="v-pills-react-tab" tabindex="0">

                        <div className='row g-3'>

                           <div className='col-md-4' role='button'>
                           <Slide direction='up'>
                           <a href='https://ayaebrahim22.github.io/FreshCart/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img1} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Fresh Cart <i className="fa-solid fa-cart-shopping"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/FreshCart' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-im-thrilled-to-announce-activity-7168717664742162432-ZAyw?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                           </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                          <Slide direction='up'>
                          <a href='https://ayaebrahim22.github.io/NoteApp/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img13} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Note App <i className="fa-regular fa-note-sticky"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/NoteApp' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-this-is-a-simple-noteapp-activity-7174229617543704576-4BDK?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                          </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                             <Slide direction='up'>
                             <a href='https://ayaebrahim22.github.io/PRODIGY_WD_03/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img12} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Tic-Tac-Toe <i className="fa-solid fa-trophy"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/PRODIGY_WD_03' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_prodigyinfotech-webdevelopment-frontendwebdevelopment-activity-7179150530982625280-XTpC?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                             </Slide>

                           </div>

                           <div className='col-md-4' role='button'>
                              <Slide direction='up'>
                              <a href='https://ayaebrahim22.github.io/SimpleSocialApp/' target='_blank' className={`${style.cardShadow} card position-relative`}>
                                 <img src={img11} className="card-img-top" alt='' height={180} />
                                 <div className="card-body text-center p-2">
                                    <h5 className={`${style.proTitle} card-title fs-5 pt-1`}>Social App <i className="fa-regular fa-share-from-square"></i></h5>
                                 </div>
                                 <div className={style.icons}>
                                    <a href='https://github.com/AyaEbrahim22/SimpleSocialApp' target='_blank' className={style.icon}><i className="fa-regular fa-file-zipper fa-lg me-2" role='button'></i></a>
                                    <a href='https://www.linkedin.com/posts/aya-ebrahim_hello-everyone-i-am-happy-to-share-this-activity-7171653705782411265-6eGv?utm_source=share&utm_medium=member_desktop' target='_blank' className={style.icon}><i className="fa-brands fa-linkedin-in fa-lg ms-2" role='button'></i></a>
                                 </div>

                              </a>
                              </Slide>

                           </div>

                        </div>

                     </div>

                  </div>

                  <div className="nav flex-column nav-pills ms-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     <button className="nav-link active text-light ProjectNav-link" id="v-pills-all-tab" data-bs-toggle="pill" data-bs-target="#v-pills-all" type="button" role="tab" aria-controls="v-pills-all" aria-selected="true">All</button>
                     <button className="nav-link text-light ProjectNav-link" id="v-pills-initial-tab" data-bs-toggle="pill" data-bs-target="#v-pills-initial" type="button" role="tab" aria-controls="v-pills-initial" aria-selected="false">Initial</button>
                     <button className="nav-link text-light ProjectNav-link" id="v-pills-advanced-tab" data-bs-toggle="pill" data-bs-target="#v-pills-advanced" type="button" role="tab" aria-controls="v-pills-advanced" aria-selected="false">Advanced</button>
                     <button className="nav-link text-light ProjectNav-link" id="v-pills-react-tab" data-bs-toggle="pill" data-bs-target="#v-pills-react" type="button" role="tab" aria-controls="v-pills-react" aria-selected="false">React</button>
                  </div>

               </div>

            </div>

         </div>
      </div>

   </>
}
