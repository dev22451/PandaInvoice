import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InvoiceForm from './InvoiceForm';
import InvoiceHomePage from './InvoiceHomePage';
function Address() {
    return (
        <div className="invoicemainclass">
            <Router>
                {/* <Navbar /> */}
                <Switch>
                    {/* <Route exact path="/">
                        <InvoiceHomePage />
                    </Route> */}
                    <Route exact path="/">
                        <InvoiceForm />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default Address;