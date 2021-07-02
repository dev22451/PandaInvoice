import React, { useState } from "react"
import { db } from "./firebase"
import Pdf from "react-to-pdf";


const ref = React.createRef();


const officedata = {
    officeName: '',
    officeAddress: '',
    phoneNo: '',
    officeEmail: ''
}
const Billto = {
    officeName: '',
    officeAddress: '',
    phoneNo: '',
    officeEmail: ''
}
const productItem = {
    productName: '',
    productQuantity: '',
    productPrice: '',
    discount: '',
    discountAmt: '',
    totalPrice: ''
}

const Invoicecal = {
    InvoiceDate: ''
}

const PayeeAccount = {
    PayeeAccount: ''
}

const PaymentMethod = {
    PaymentMethod: ''
}

const invoiceAmount = {
    invoiceAmount: ''
}
const Inicialdata = {
    OfficeDetails: { ...officedata },
    Billto: { ...Billto },
    InvoiceId: 1,
    InvoiceDate: { ...Invoicecal },
    products: [
        { ...productItem }
    ],
    taxType: 'cgst',
    taxPercentage: '18%',
    taxAmount: '',
    invoiceAmount: { ...invoiceAmount },
    PaymentMethod: { ...PaymentMethod },
    PayeeAccount: { ...PayeeAccount }
}


const Products = () => {
    const [comname, setComname] = useState("")
    const [comadd, setComadd] = useState("")
    const [comphone, setComphone] = useState("")
    const [comemail, setComemail] = useState("")
    const [productsname, setProductsname] = useState('')
    const [productsprice, setProductsprice] = useState('')
    const [productsdiscount, setProductsdiscount] = useState('')
    const [productsdiscountprice, setProductsdiscountprice] = useState('')
    const [productstotal, setProductstotal] = useState('')
    const [paymentmethod, setPaymentmethod] = useState('')
    const [payename, setPayename] = useState('')
    const [payeaccount, setPayeaccount] = useState('')
    const [payenumber, setPayenumber] = useState('')
    const [invoiceData, setInvoiceData] = useState({ ...Inicialdata })


    db.collection('contacts').get().then((snapshot) => {
        // snapshot.docs.forEach(doc => {
        const x = snapshot.docs;
        const y = x.length + 1;
        console.log(y)
        // })
    })


    const handlesubmit = (e) => {
        e.preventDefault();
        db.collection('contacts').add({
            // invoiceData
        })
            .then(() => {
                alert("message has been submmitted")
            })
            .catch((error) => {
                alert('error .message');
            })

    }

    const addNewProdct = () => {
        //add new item in array of object max 5


        const newData = { ...invoiceData }
        newData.products.push({ ...productItem })
        console.log(newData)
        //setstate
        setInvoiceData(newData)

    }

    const removeProduct = (index) => {
        // remove an index from array of object javascript

        const newData = { ...invoiceData }
        newData.products.splice(index, 1)
        console.log(newData)
        //setstate
        setInvoiceData(newData)
        // const remove = [...Products];
        // remove.splice(index, 1);
    }

    const handleChange = (e, index) => {
        console.log({ e }, e.target.name, e.target.value)
        const newData = { ...invoiceData };
        newData[e.target.name] = e.target.value;
        console.log({ newData })

        setInvoiceData(newData)
    }

    const handleOfficeDeatilsChange = (e) => {
        const newData = { ...invoiceData };
        newData.OfficeDetails[e.target.name] = e.target.value;
        console.log({ newData })

        setInvoiceData(newData)
    }

    const handlePayeeAccountChange = (e) => {
        const newData = { ...invoiceData };
        newData.PayeeAccount[e.target.name] = e.target.value;
        console.log({ newData })

        setInvoiceData(newData)
    }

    const handleBillToChange = (e, index) => {
        const newData = { ...invoiceData };
        newData.Billto[e.target.name] = e.target.value;
        console.log({ newData })

        setInvoiceData(newData)

    }


    const handlePayementMethodChange = (e) => {
        // console.log({ e }, e.target.name, e.target.value)
        const newData = { ...invoiceData };
        newData.PaymentMethod[e.target.name] = e.target.value;
        console.log({ newData })

        setInvoiceData(newData)

    }

    const handleChangeDetailsItem = (index, e) => {
        const newData = { ...invoiceData };
        newData.products[index] = {
            ...newData.products[index],
            [e.target.name]: e.target.value
        }
        setInvoiceData(newData)

    }

    const handleChangeProductQuantityItem = (index, e) => {
        const newData = { ...invoiceData };
        newData.products[index] = {
            ...newData.products[index],
            [e.target.name]: e.target.value
        }
        setInvoiceData(newData)

    }

    const handleChangeProductPriceItem = (index, e) => {
        const newData = { ...invoiceData };
        newData.products[index] = {
            ...newData.products[index],
            [e.target.name]: e.target.value
        }
        setInvoiceData(newData)

    }
    const handleChangeProductsDiscountItem = (index, e) => {
        const newData = { ...invoiceData };
        newData.products[index] = {
            ...newData.products[index],
            [e.target.name]: e.target.value
        }
        setInvoiceData(newData)

    }
    const handleChangeDiscountAmountItem = (index, e) => {
        const newData = { ...invoiceData };
        newData.products[index] = {
            ...newData.products[index],
            // [e.target.name]:                     
        }
        setInvoiceData(newData)

    }
    const handleChangeTotalPriceItem = (index, e) => {
        const newData = { ...invoiceData };
        newData.products[index] = {
            ...newData.products[index],
            [e.target.name]: e.target.value
        }
        setInvoiceData(newData)

    }
    const handleInvoiceDateChange = (e) => {
        // console.log({ e }, e.target.name, e.target.value)
        const newData = { ...invoiceData };
        newData.InvoiceDate[e.target.name] = e.target.value;
        // console.log({ newData })

        setInvoiceData(newData)
    }

    console.log({ invoiceData })
    return (
        <div className="row  formcss">
            <div ref={ref}>
                <form className="from" onSubmit={handlesubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            {/* <div className="d-flex"> */}
                            <div className="head">
                                <div className="head-div container-fluid">
                                    <h4 className="office">Office Details</h4>
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-sm" id="company-name"
                                                placeholder="Company Name"
                                                name="officeName"
                                                value={invoiceData.OfficeDetails.officeName}
                                                onChange={handleOfficeDeatilsChange}
                                            //onChange={(e) => setComname(e.target.value)} 
                                            />
                                        </div>
                                    </div><br />
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <textarea className="form-control form-control-sm" id="company-address"
                                                placeholder="Company Address"
                                                name="officeAddress"
                                                value={invoiceData.OfficeDetails.officeAddress}
                                                onChange={handleOfficeDeatilsChange}
                                            // onChange={(e) => setComadd(e.target.value)}

                                            />
                                        </div>
                                    </div><br />
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <input type="phone" className="form-control form-control-sm" id="phone" autoComplete="off"
                                                placeholder="Phone Number"
                                                name="phoneNo"
                                                value={invoiceData.OfficeDetails.phoneNo}
                                                onChange={handleOfficeDeatilsChange}
                                            // onChange={(e) => setComphone(e.target.value)}
                                            />
                                        </div>
                                    </div><br />
                                    <div className="form-group row">
                                        <div className="col-sm-6">
                                            <input type="email" className="form-control form-control-sm" id="email" autoComplete="off"
                                                placeholder="Email"
                                                name="officeEmail"
                                                value={invoiceData.OfficeDetails.officeEmail}
                                                onChange={handleOfficeDeatilsChange}
                                                // onChange={(e) => setComemail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <h4 className="bill">Bill To</h4>
                                    <div className="form-group row">
                                        <label for="company-name" className="col-sm col-form-label">Company Name</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-sm" id="company-name"
                                                name="officeName"
                                                value={invoiceData.Billto.officeName}
                                                onChange={handleBillToChange}
                                            // onChange={(e) => setComname(e.target.value)}
                                            />
                                        </div>
                                    </div><br />
                                    <div className="form-group row">
                                        <label for="company-address" className="col-sm col-form-label">Company Address</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control form-control-sm" id="company-address"
                                                name="officeAddress"
                                                value={invoiceData.Billto.officeAddress}
                                                onChange={handleBillToChange}
                                            // onChange={(e) => setComadd(e.target.value)}
                                            />
                                        </div>
                                    </div><br />
                                    <div className="form-group row">
                                        <label for="phone" className="col-sm col-form-label">Phone Number</label>
                                        <div className="col-sm-6">
                                            <input type="phone" className="form-control form-control-sm" id="phone"
                                                autoComplete="off"
                                                name="phoneNo"
                                                value={invoiceData.Billto.phoneNo}
                                                onChange={handleBillToChange}
                                                // onChange={(e) => setComphone(e.target.value)}
                                                required />
                                        </div>
                                    </div><br />
                                    <div className="form-group row">
                                        <label for="email" className="col-sm col-form-label">Email</label>
                                        <div className="col-sm-6">
                                            <input type="email" className="form-control form-control-sm" id="email"
                                                autoComplete="off"
                                                name="officeEmail"
                                                value={invoiceData.Billto.officeEmail}
                                                onChange={handleBillToChange}
                                                // onChange={(e) => setComemail(e.target.value)}
                                                required />
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="head-div container-fluid">
                                <div className="table-responsive mt-5">
                                    <h1 className="center">INVOICE</h1><br />
                                    <table className="table table-sm  table-hover  caption-top">
                                        <thead className="table-dark ">

                                            <tr>
                                                <th className="first" >Invoice#</th>
                                                <th className="second">Date</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <td><span>HPPL21001</span></td>
                                            <td><input type="date"
                                                name="InvoiceDate"
                                                value={invoiceData.InvoiceDate.InvoiceDate}
                                                onChange={handleInvoiceDateChange} /></td>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="col-md-11.5 productdata">
                        <h4 className="products">Products</h4>
                        {/** use map in prodct of invoice */}
                        {invoiceData.products.length && invoiceData.products.map((instance, index) => {
                            console.log({ instance }, { index })
                            const removeProductItem = () => removeProduct(index)
                            const handleProductsDetailsChange = (e) => handleChangeDetailsItem(index, e)
                            const handleProductsQuantityChange = (e) => handleChangeProductQuantityItem(index, e)
                            const handleProductsPriceChange = (e) => handleChangeProductPriceItem(index, e)
                            const handleProductsDiscountChange = (e) => handleChangeProductsDiscountItem(index, e)
                            const handleProductsDiscountAmountChange = (e) => handleChangeDiscountAmountItem(index, e)
                            const handleProductsTotalPriceChange = (e) => handleChangeTotalPriceItem(index, e)
                            return (
                                <div className="row Addproduct">
                                    <div className="col">
                                        {/* <label for="products-name" className="label-form mb-1 text-muted control">Products Name</label> */}
                                        <input type="text" className="form-control form-control-sm" id="products-name"
                                            placeholder="Products Name"
                                            name="productName"
                                            value={invoiceData.products.productName}
                                            onChange={handleProductsDetailsChange}
                                        // onChange={(e) => setProductsname(e.target.value)}

                                        />
                                    </div>
                                    <div className="col">
                                        {/* <label for="products-quantity" className="label-form mb-1 text-muted control">Products Quantity</label> */}
                                        <input type="number" className="form-control form-control-sm" id="products-quantity"
                                            placeholder="Products Quantity" min="0" max="5"
                                            name="productQuantity"
                                            value={invoiceData.products.productQuantity}
                                            onChange={handleProductsQuantityChange}
                                        // onChange={(e) => setProductsquantity(e.target.value)}
                                        />
                                    </div>
                                    {/* </div> */}
                                    {/* <div className="row"> */}
                                    <div className="col">
                                        {/* <label for="products-price" className="label-form mb-1 text-muted control">Products Price</label> */}
                                        <input type="phone" className="form-control form-control-sm" id="products-price"
                                            placeholder="Products price"
                                            name="productPrice"
                                            value={invoiceData.products.productPrice}
                                            onChange={handleProductsPriceChange}
                                        // onChange={(e) => setProductsprice(e.target.value)}
                                        />
                                    </div>
                                    <div className="col">
                                        <input type="phone" className="form-control form-control-sm" id="discount"
                                            placeholder="Discount %"
                                            name="discount"
                                            value={invoiceData.products.discount}
                                            onChange={handleProductsDiscountChange}

                                        />
                                    </div>

                                    <div className="col">
                                        {/* <label for="discount-amount" className="label-form mb-1 text-muted control">Discount Amount</label> */}
                                        <input type="phone" className="form-control form-control-sm" id="discount-amount"
                                            placeholder="Discount Amount"
                                            name="discountAmt"
                                            value={invoiceData.products.discountAmt}
                                            onChange={handleProductsDiscountAmountChange}
                                        // onChange={(e) => setProductsdiscountprice(e.target.value)}
                                        />
                                    </div>
                                    <div className="col">
                                        {/* <label for="total-price" className="label-form mb-1 text-muted control">Total Price</label> */}
                                        <input type="phone" className="form-control form-control-sm" id="total-price"
                                            placeholder="Total price"
                                            name="totalPrice"
                                            value={invoiceData.products.totalPrice}
                                            onChange={handleProductsTotalPriceChange}
                                        // onChange={(e) => setProductstotal(e.target.value)}
                                        />
                                    </div>
                                    <div className="col">
                                        <button type="button" className="btn btn-danger btn-sm removebutton" onClick={removeProductItem}>Remove</button>
                                    </div>
                                </div>
                            )
                        })}
                        <br />
                        <div className="addstyle">
                            <button type="button" className="btn btn-success btn-sm addbutton" onClick={addNewProdct}>Add</button>
                        </div>
                    </div>

                    <div className="col-md-11.5 taxdata">
                        <div className="form-group row">
                            <label for="tax" className="col-sm col-form-label">Tax</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control form-control-sm" id="tax" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-11.5 totaltax">
                        <div className="form-group row">
                            <label for="totaltax" className="col-sm col-form-label totalfont">Total Including Tax</label>
                            <div className="col-sm-2">
                                <input type="text" className="form-control form-control-sm" id="totaltax" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div className="col-md-6 paymentdetails ">
                        <h4 className="bill">Payment Details</h4>
                        <div className="form-group row">
                            <label for="method" className="col-sm col-form-label">Method</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-sm" id="method"
                                    name="PaymentMethod"
                                    value={invoiceData.PaymentMethod.PaymentMethod}
                                    onChange={handlePayementMethodChange}
                                />
                            </div>
                        </div><br />
                        <div className="form-group row">
                            <label for="payeeacount" className="col-sm col-form-label">Payee Account</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-sm" id="payeacount"
                                    name="PayeeAccount"
                                    value={invoiceData.PayeeAccount.PayeeAccount}
                                    onChange={handlePayeeAccountChange}
                                // onChange={(e) => setPayeaccount(e.target.value)}
                                />
                            </div>
                        </div><br />
                        <div className="form-group row">
                            <label for="payname" className="col-sm col-form-label">Payee Name</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control form-control-sm" id="payname"
                                //  name="PaymentMethod"
                                //  value={invoiceData.PaymentMethod.PaymentMethod}
                                //  onChange={handlePayementMethodChange}
                                // onChange={(e) => setPayename(e.target.value)} 
                                />
                            </div>
                        </div><br />
                        <div className="form-group row">
                            <label for="paynumber" className="col-sm col-form-label">Payee Number</label>
                            <div className="col-sm-6">
                                <input type="phone" className="form-control form-control-sm" id="paynumber"
                                    name="payenumber"
                                    value={payenumber}
                                    onChange={(e) => setPayenumber(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr className="new1" />
                    <div className="d-flex justify-content-between align-items-center mb-2 buttonclass">

                        <button className="btn btn-primary" type="button">Cancel</button>
                        <button className="btn btn-primary" type="submit">Submit</button>

                    </div>
                </form>
            </div>
            <div>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                </Pdf>

            </div>
        </div >

    )
}
export default Products