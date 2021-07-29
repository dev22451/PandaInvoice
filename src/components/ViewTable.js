import React, { useEffect, useState } from 'react'
import { db } from "./firebase"
import PhoneIcon from '@material-ui/icons/Phone';
import axios from "axios";
import PlaceIcon from '@material-ui/icons/Place';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useRouteMatch } from 'react-router';
import { Contacts } from '@material-ui/icons';

function ViewTable() {
    // let invoiceDataList = []
    // await db.collection('contacts').get().then((querySnapshot) => {
    //     // snapshot.docs.forEach(doc =>
    //     invoiceDataList = querySnapshot.docs.map(doc => doc.data())
    //     console.log(invoiceDataList, 'inside')
    // })
    const {
        params: { id },
    } = useRouteMatch('/viewtable/:id');

    console.log(id)
    // delete the document

    const [invoiceDataList, setInvoiceDataList] = useState([])
    // const fetchBlogs = async () => {
    //     const response = db.collection('contacts')
    //     const data = await response.get()
    //     data.docs.forEach(item => {
    //         setInvoiceDataList([...invoiceDataList, item.data()])
    //         console.log([...invoiceDataList, item.data()])
    //     })

    // }
    // useEffect(() => {
    //     fetchBlogs();

    // }, [])

    // useEffect(() => {
    //     const response = db.collection('contacts')
    //     return response.onSnapshot((snapshot) => {
    //         const postData = [];
    //         snapshot.forEach((doc) => postData.push({ ...doc.data(), id: id }));
    //         console.log(postData);  // <------
    //         setInvoiceDataList(postData);
    //     });
    // }, []);


    const invoiceData = () => {
        db
            .collection("contacts")
            .doc(id)
            .get()
            .then((docRef) => {
                setInvoiceDataList([docRef.data()])
            })
            // { console.log(docRef.data()) }
            .catch((error) => { })
    }
    useEffect(() => {
        invoiceData()
    }, [])
    console.log([invoiceDataList])
    return (
        <div>
            <div className="row mt-2 ">
                <div className="bg-whitesmoke p-4 col-6">
                    <h4>Office Details</h4>
                    <hr />
                    {

                        invoiceDataList && invoiceDataList.map((s, index) => {
                            return (
                                <p key={index}>
                                    <AccountCircleIcon /> {s.OfficeDetails.officeName}<br />
                                    <PlaceIcon /> {s.OfficeDetails.officeAddress}<br />
                                    <PhoneIcon /> {s.OfficeDetails.phoneNo}<br />
                                    <EmailTwoToneIcon /> {s.OfficeDetails.officeEmail}


                                </p>
                            )
                        }
                        )}
                </div>
                <div className="bg-whitesmoke p-4 col-6">
                    <h4>Bill To</h4>
                    <hr />
                    {
                        invoiceDataList && invoiceDataList.map((s, index) => {
                            return (
                                <p key={index}>
                                    <AccountCircleIcon /> {s.Billto.officeName}<br />
                                    <PlaceIcon /> {s.Billto.officeAddress}<br />
                                    <PhoneIcon /> {s.Billto.phoneNo}<br />
                                    <EmailTwoToneIcon /> {s.Billto.officeEmail}
                                </p>
                            )
                        }
                        )}
                </div>
            </div>
            <br />

            <div className="row">
                <div className="bg-whitesmoke p-4 col-12">
                    <h4>Item Details</h4>
                    <hr />
                    <table className="table table-sm ">
                        <thead className="table-dark">
                            <tr>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Product price</th>
                                <th>Discount</th>
                                <th>Discount Amount</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log(invoiceDataList)}
                            {
                                invoiceDataList.map((s, index) => {
                                    return (
                                        // console.log(s.invoiceData.products[{ ...productName }]),
                                        // console.log(s.productName),
                                        <tr key={index}>
                                            <td>{s.invoiceData.products[index].productName}</td>
                                            <td>{s.invoiceData.products[index].productQuantity}</td>
                                            <td>{s.invoiceData.products[index].productPrice}</td>
                                            <td>{s.invoiceData.products[index].discount}</td>
                                            <td>{s.invoiceData.products[index].discountAmt}</td>
                                            <td>{s.invoiceData.products[index].totalPrice}</td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                        {/* <tbody>
                            {
                                invoiceDataList.map((s, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{s.invoiceData.products[1].productName}</td>
                                            <td>{s.invoiceData.products[1].productQuantity}</td>
                                            <td>{s.invoiceData.products[1].productPrice}</td>
                                            <td>{s.invoiceData.products[1].discount}</td>
                                            <td>{s.invoiceData.products[1].discountAmt}</td>
                                            <td>{s.invoiceData.products[1].totalPrice}</td>
                                        </tr>
                                    )
                                }
                                )}
                        </tbody> */}
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col bg-whitesmoke p-4 col">
                    {

                        invoiceDataList && invoiceDataList.map((s, index) => {
                            return (
                                <span key={index}>
                                    <p>Tax Amount :  {s.invoiceData.taxAmount}</p>
                                    <p>Total Including Tax :  {s.invoiceData.TotalIncludingTax}</p>
                                </span>
                            )
                        })}
                </div>
            </div>
            <br />

            <div className="row">
                <div className="bg-whitesmoke p-4 col">
                    <h4>Pay Details</h4>
                    <hr />
                    {
                        invoiceDataList && invoiceDataList.map((s, index) => {
                            return (
                                <p key={index}>
                                    Payment Method : {s.payment.PaymentMethod}<br />
                                    Payment Account : {s.payment.PaymentAccount}<br />
                                    Pay Name :{s.payment.PayName}<br />
                                    Pay Number : {s.payment.PayNumber}
                                </p>
                            )
                        }
                        )}

                </div>
            </div>
        </div >
    )
}

export default ViewTable
