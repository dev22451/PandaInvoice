import * as React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style.css"
import * as Products from './Products'
import { db } from './firebase'
import * as Addresss from './Address';
const HomePage = () => {
    return (
        <div className="container">
            <div className="row signuppage">
                <Addresss />
                {/* <Products /> */}
            </div>
        </div>


    )
}
export default HomePage