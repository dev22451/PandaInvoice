import React from 'react'
import { useHistory } from "react-router"
import { FcAddDatabase } from "react-icons/fc";
import { PlusOutlined } from '@ant-design/icons';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
const InvoiceHomePage = () => {
    let history = useHistory();

    const handleInvoiceForm = () => {
        history.push("/invoiceform");
    }

    const handleInvoiceReview = () => {
        history.push("/navbar")
    }
    return (
        <div className="invoicepage">
            <h1 className="InvoiceHeading">Invoive Data</h1>
            <div className="col-md-6  offset-md-3 mt-5 buttonstyle ">
                <div className="d-flex justify-content-between align-items-center mb-2 mt-5 ">
                    <button type="button" className="btn-lg" onClick={handleInvoiceForm}><p><AddCircleTwoToneIcon /></p>Add Invoive</button>
                    <button type="button" className="btn-lg" onClick={handleInvoiceReview}><p><VisibilityTwoToneIcon /></p>view Invoice</button>
                </div>
            </div>
        </div >
    )
}
export default InvoiceHomePage