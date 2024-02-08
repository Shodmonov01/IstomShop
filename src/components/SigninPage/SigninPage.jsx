import React from 'react'

import './SigninPage.scss'

function SigninPage() {
  return (
    <>
    <div className="container">
    <div className="signin" data-aos="fade-right">
          <div className="con-left-title">
            <p>ПОЛУЧИТЬ </p>
            <p className="istom-text">КОНСУЛЬТАЦИЮ</p>
          </div>
          <p className="con-left-subtitle">
            Оставьте заявку и в ближайшее время мы с Вами свяжемся
          </p>
          <div className='name-input' data-aos="fade-up">
            <p>Ваше имя</p>
            <input className="connect-name" type="text" placeholder="Иван иванов" />
          </div>
          <div className='number-input' data-aos="fade-up">
            <p>Ваш номер</p>
            <input className="connect-number" type="text" placeholder="+7(999) 999-9999" />
          </div>
          <div className='quest-input' data-aos="fade-up">
            <p>Ваш вопрос</p>
            <input className="connect-quest" type="text" placeholder="" />
          </div>
          <button className="connect-button istom-btn" data-aos="fade-up">
            Получить консультацию
          </button>
          <p className="connect-done" data-aos="fade-up">
            Нажимая кнопку, вы даете согласие на обработку персональных данных
          </p>
        </div>
    </div>
    </>
  )
}

export default SigninPage