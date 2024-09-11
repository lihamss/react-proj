import NoteItem from "../../components/content/NoteItem";
import React from 'react';
import { Pagination } from 'antd';
import './index.css'
const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};
const DailyReport = () => {
    return (
        <div className="daily-report-container">
            <div className="card-container">
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
                <NoteItem />
            </div>
            <div className="card-pager">
                <Pagination
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={3}
                    total={500}
                />
            </div>
        </div>
    );
};

export default DailyReport