import React, { useState } from 'react';
import HeadTitle from '../../components/ui/HeadTitle';
import MainBtn from '../../components/ui/MainBtn';
import location from '../../assets/images/icon-location.svg';

export default function WhereToFindUs() {

    const [activeCard, setActiveCard] = useState(0);

    const branches = [
        {
            id: 1,
            name: "محلكم - فرع الأحساء 1",
            address: "الشارع العام، البصيرة، الهفوف 36364",
            phone: "+966 *** *** ***",
        },
        {
            id: 2,
            name: "محلكم - فرع الأحساء 2",
            address: "الشارع العام، البصيرة، الهفوف 36364",
            phone: "+966 *** *** ***",
        },
    ];






    return <>

        <section className="WhereToFindUs">
            <div className="main-container">
                <div className="title">
                    <HeadTitle value="أين تجدنا" />
                    <p>ابحث عن متجر HELMET أو موزع معتمد بالقرب منك في المملكة العربية السعودية.</p>
                </div>


                <div className="form-content">
                    <form action="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="city">اختر المدينة</label>

                                    <div className="custom-select">
                                        <select id="subject">
                                            <option value="">اختر المدينة</option>
                                            <option value="">مكة</option>
                                            <option value="">جدة</option>
                                        </select>

                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="search">بحث </label>
                                    <div className='input-box position-relative'>
                                        <input id="search" placeholder="أدخل نقطة البيع" type="search" />
                                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-5">
                            <div className="col-md-7">
                                <div className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=..."
                                        width="600"
                                        height="450"
                                        style={{ border: "0", width: "100%", borderRadius: "20px" }}
                                        allowFullScreen=""
                                        loading="lazy">
                                    </iframe>
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="info">
                                    <h3>عناوين الفروع والموزعين</h3>
                                    <div className="cards">

                                        {branches.map((branch) => (
                                            <div key={branch.id} className={`card-info ${activeCard === branch.id ? "active" : ""}`} onClick={() => setActiveCard(branch.id)}>
                                                    <div className="icon-location">
                                                        <img src={location} alt="" />
                                                    </div>

                                                    <div className="text">
                                                        <h4>{branch.name}</h4>
                                                        <p>{branch.address}</p>

                                                        <div className='phone'>
                                                            <i className="fa-solid fa-phone"></i>
                                                            <p>{branch.phone}</p>
                                                        </div>

                                                        <MainBtn value="أحصل على الاتجاهات" />
                                                    </div>

                                            </div>
                                        ))}







                                        {/* <div
                                            className={`card-info ${activeCard === 0 ? "active" : ""}`}
                                            onClick={() => setActiveCard(0)}
                                        >

                                            <div className="icon-location">
                                                <img src={location} alt="" />
                                            </div>

                                            <div className="text">
                                                <h4>محلكم - فرع الأحساء 1</h4>
                                                <p>الشارع العام، البصيرة، الهفوف 36364</p>

                                                <div className='phone'>
                                                    <i className="fa-solid fa-phone"></i>
                                                    <p>+966 *** *** ***</p>
                                                </div>

                                                <MainBtn value="أحصل على الاتجاهات" />
                                            </div>

                                        </div> */}



                                        {/* <div
                                            className={`card-info ${activeCard === 0 ? "active" : ""}`}
                                            onClick={() => setActiveCard(0)}
                                        >

                                            <div className="icon-location">
                                                <img src={location} alt="" />
                                            </div>

                                            <div className="text">
                                                <h4>محلكم - فرع الأحساء 1</h4>
                                                <p>الشارع العام، البصيرة، الهفوف 36364</p>

                                                <div className='phone'>
                                                    <i className="fa-solid fa-phone"></i>
                                                    <p>+966 *** *** ***</p>
                                                </div>

                                                <MainBtn value="أحصل على الاتجاهات" />
                                            </div>

                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </section>

    </>
}
