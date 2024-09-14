import NoteItem from "../../components/content/NoteItem";
import React from 'react';
import { Pagination } from 'antd';
import './index.css'
import { useState } from "react";
import classNames from "classnames";
const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};
const DailyReport = () => {
    const [isOpenCard, setIsOpenCard] = useState(false);

    const changeLayout = () => {
        setIsOpenCard(!isOpenCard);
        console.log(isOpenCard)
    }
    return (
        <div className="home-container">
            {/* <div className={classNames('daily-report-container', { 'half-width': isOpenCard })}> */}
            <div className='daily-report-container half-width'>
                <div className="card-container">
                    <NoteItem changeLayout={changeLayout} />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                    <NoteItem />
                </div>
                <Pagination
                    align="center"
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={3}
                    total={500}
                />
            </div>
            {/* 判断isOpenCard来决定是否显示card-detail */}
            {
                isOpenCard && (
                    <div className="card-detail half-width">
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                    </div>
                )
            }

        </div>
    );
};

export default DailyReport