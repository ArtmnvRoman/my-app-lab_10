import React from "react";
import pic1 from '../images/f3.png'
import pic2 from '../images/f4.png'
import pic3 from '../images/f5.png'


function ToDo() {
    return (
        <section className="main">
        <div className="container_2">
            <h2 className="main_title">Что Вам необходимо?</h2>
            <div className="main_blocks">
                <div className="blocks">
                    <img src={pic1} alt="" className="img_in_blocks"/>
                    <h3 className="blocks_title">Первый блок</h3>
                    <p className="content_in_block">Lorem, impsum dolar sit amet comectetur<br/>adipisking elk</p>
                </div>
                <div className="blocks">
                    <img src={pic2} alt="" className="img_in_blocks"/>
                    <h3 className="blocks_title">Второй блок</h3>
                    <p className="content_in_block">Lorem, impsum dolar sit amet comectetur<br/>adipisking elk</p>
                </div>
                <div className="blocks">
                    <img src={pic3} alt="" className="img_in_blocks"/>
                    <h3 className="blocks_title">Третий блок</h3>
                    <p className="content_in_block">Lorem, impsum dolar sit amet comectetur<br/>adipisking elk</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ToDo