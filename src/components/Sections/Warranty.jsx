import React from 'react';
import MainBtn from '../ui/MainBtn';

export default function Warranty() {
    return <>

        <section className='warranty section'>
            <div className="main-container">
                <div className="text">
                    <h3>ضمان HELMET لراحة بالك</h3>
                    <p> 12 شهراً من الحماية الحقيقية — لأن الحماية عندنا ليست منتج، بل ثقة.</p>
                    <div className="btn-group d-flex gap-3">
                        <MainBtn href="" value={"بوابة الضمان"}/>
                        <MainBtn href="" value={"شروط الضمان"}/>
                    </div>
                </div>
            </div>
        </section>

    </>
}
