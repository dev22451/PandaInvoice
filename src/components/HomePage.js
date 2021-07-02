import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style.css"
import Products from './Products'
import { db } from './firebase'
import Addresss from './Address';
const HomePage = () => {
    return (
        <div className="row signuppage">
            <Addresss />
            {/* <Products /> */}

        </div>


    )
}
export default HomePage