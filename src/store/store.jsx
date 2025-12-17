import { configureStore } from '@reduxjs/toolkit';
import bulkMailSlice from '../features/bulkMailSlice';
import memberReducer from "../features/member/memberSlice";
import noticeReducer from '../features/notice/noticeSlice';
import loanReducer from '../features/loan/loanSlice';
import whatsappNoticeReducer from "../features/whatsappNotice/whatsappNoticeSlice";

export const store = configureStore({
    reducer: {
        bulkMail: bulkMailSlice,
        members: memberReducer,
        notice: noticeReducer,
        loan: loanReducer,
        whatsappNotice: whatsappNoticeReducer,
    },
});

export default store;