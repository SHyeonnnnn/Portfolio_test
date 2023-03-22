import React from 'react';
import Header from '../components/Header';
import './style/kocca.scss'

const kocca = () => {
    return (
        <div>
            <Header/>
            <section id="kocca">
                <div className="color_box">
                    <div className="text">
                        <h2>한국콘텐츠진흥원</h2>
                        <p>HTML, CSS, JQUERY 를 이용하여 웹표준, 웹접근성을 고려하여 제작한 관공서 클론 코딩</p>
                        <div className="skills">
                            <img src="https://cdn.pixabay.com/photo/2016/11/19/22/25/html5-1841458__340.png" alt="" className="skill_logo" />
                            <img src="https://cdn.pixabay.com/photo/2016/11/19/23/00/css3-1841590__340.png" alt="" className="skill_logo" />
                            <img src="https://images.credly.com/size/340x340/images/a699a8c9-354e-4404-b00c-fd3ebdc4289b/jquery-badge.png" alt="" className="skill_logo" />
                        </div>
                        <div className="link">
                            <a href="https://github.com/m1n720n9/kocca">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="skill_logo" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flow_img">
                    <a href="https://m1n720n9.github.io/kocca/">
                        <img src="../../img/primg.png" alt="" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default kocca;