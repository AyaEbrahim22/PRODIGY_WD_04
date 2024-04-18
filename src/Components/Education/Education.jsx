import { Bounce, Slide } from 'react-awesome-reveal'
import style from './Education.module.css'

export default function Education() {



    return <>

        <h2 className={style.title}>Education</h2>

        <div id='edu' className={style.eduComponent}>
            <div className='container'>
                <Bounce>
                    <div className='row align-items-center gy-4'>

                        <div className='col-md-4'>
                            <div>
                                <div className={`${style.Card} card position-relative border-0`}>
                                    <div className={`${style.cardBody} card-body text-center`}>
                                        <h5 className="card-title text-body-secondary"><i className="fa-solid fa-user-clock"></i> High school</h5>
                                        <h6 className="card-subtitle mb-2 text-body-tertiary">2017 / 2019</h6>
                                    </div>
                                    <div className={`${style.cardLayer} cardbottom`}>
                                        <p className={`${style.eduParagraph} card-text text-light `}>I graduated from Al-Nahda Experimental language school, Department of Scientific mathematics, with an Excellent grade.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div>
                                <div className={`${style.Card} card position-relative border-0`}>
                                    <div className={`${style.cardBody} card-body text-center`}>
                                        <h5 className="card-title text-body-secondary"><i className="fa-solid fa-user-graduate"></i> Bachelor's degree</h5>
                                        <h6 className="card-subtitle mb-2 text-body-tertiary">2019 / 2023</h6>
                                    </div>
                                    <div className={`${style.cardLayer} cardbottom`}>
                                        <p className={`${style.eduParagraph} card-text text-light `}>I graduated from College of Computers and Artificial Intelligence, Department of Information Systems, with a very good grade with honors.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div>
                                <div className={`${style.Card} card position-relative border-0`}>
                                    <div className={`${style.cardBody} card-body text-center`}>
                                        <h5 className="card-title text-body-secondary"><i className="fa-solid fa-certificate"></i> Web Course</h5>
                                        <h6 className="card-subtitle mb-2 text-body-tertiary">2023Oct / 2024Mar</h6>
                                    </div>
                                    <div className={`${style.cardLayer} cardbottom`}>
                                        <p className={`${style.eduParagraph} card-text text-light `}>I have completed my Front end web development course with Route.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Bounce>
            </div>
        </div>

    </>
}
