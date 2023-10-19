import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Frontend from '../Pages/Frontend'

export default function PublicRouts() {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Frontend />} />
            </Routes>
        </>
    )
}
