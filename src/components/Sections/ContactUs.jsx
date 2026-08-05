import React, { useState } from 'react';
import MainBtn from '../ui/MainBtn';
import HeadTitle from '../ui/HeadTitle';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import { useFormik } from 'formik';


export default function ContactUs() {
  return <>
      <section className='ContactUs section'>
        <div className="main-container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="form-content">
                <HeadTitle value={"تواصل معنا"} />

                <form action="">
                  <div className="input-group">
                    <label htmlFor="name">الاسم بالكامل</label>
                    <input type="text" id="name" placeholder='الاسم بالكامل' />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">البريد الإلكتروني</label>
                    <input type="email" id="email" placeholder='البريد الإلكتروني' />
                  </div>

                  <div className="input-group">
                    <label htmlFor="phone">رقم الجوال</label>
                    <input type="text" id="phone" placeholder='+966' />
                  </div>

                  <div className="input-group">
                    <label htmlFor="city">الموضوع</label>

                    <div className="custom-select">
                      <select id="subject">
                          <option value="">اختر موضوع</option>
                          <option value="">استفسار عام</option>
                          <option value="">استفسار عن المنتج</option>
                          <option value="">الضمان</option>
                          <option value="">الدعم الفني</option>
                      </select>

                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="message">الرسالة</label>
                    <textarea id="message" placeholder='كيف يمكننا مساعدتك'></textarea>
                  </div>

                  <MainBtn value="إرسال الرسالة" className='mx-auto' />
                </form>
              </div>
          </div>

            <div className="col-lg-6">
              <div className="content">
                <div className="contact-card">
                  <h4>معلومات الاتصال</h4>
                  <div className='contact-detail'>
                    <span>
                      <i className="fa-regular fa-envelope"></i>
                    </span>
                    <p>support@helmet-shield.com</p>
                  </div>
                  <div className='contact-detail'>
                    <span>
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <p>+966 530 507 471</p>
                  </div>

                  <div className="social">
                    <Link to=''>
                      <i className="fa-brands fa-whatsapp"></i>
                    </Link>

                    <Link to=''>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>

                    <Link to=''>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  </>
}
