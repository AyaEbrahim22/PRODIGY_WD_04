import style from './Contact.module.css'


export default function Contact() {


    return <>
        <div id='contact' className={style.contactComponent}>
            <div className='container'>
                 <h2 className={style.title}>Contact Me</h2>
                <div className='row'>

                    <div className='col-md-4'>
                        <div className={style.content}>
                            <i className={`${style.location} fa-solid fa-location-dot`}></i>
                            <span className={style.Contitle}>Location</span>
                            <p className={style.para}>Helwan, Cairo</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className={style.content}>
                            <i  className={`${style.envelope} fa-solid fa-envelope`}></i>
                            <span className={style.Contitle}>Gmail</span>
                            <p className={style.para}>Aya.Ebrahim.190900@gmail.com</p>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className={style.content}>
                            <i className={`${style.phone} fa-solid fa-phone`}></i>
                            <span className={style.Contitle}>Phone</span>
                            <p className={style.para}>(+20)1150282235</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}
