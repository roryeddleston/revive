import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./style.scss";
import config from "./config.json";
import Layout from "../../components/layout/main";
import PaymentForm from "../../components/payment-form/PaymentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Load Stripe with your public key
const stripePromise = loadStripe("your-publishable-key-here");

export default function Giving() {
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [donationAmount, setDonationAmount] = useState("");

    const handleOpenPaymentForm = () => setShowPaymentForm(true);
    const handleClosePaymentForm = () => setShowPaymentForm(false);

    const handlePaymentSuccess = () => {
        alert("Thank you for your donation! ❤️");
        setShowPaymentForm(false);
        setDonationAmount(""); // Reset input after successful payment
    };

    return (
        <Layout>
            <div className="giving">
            <h1 className="page-heading">{config.giving.heading}</h1>
                <div className="giving-container">
                    <p className="paragraphs">{config.giving.body}</p>

                    {/* Bank Transfer Section */}
                    <div className="giving-transfer">
                        <h2>{config.giving.transfer.description}</h2>
                        <div className="account-details">
                            <p>{config.giving.transfer.accountDetails.accountName}</p>
                            <p>{config.giving.transfer.accountDetails.sortCode}</p>
                            <p>{config.giving.transfer.accountDetails.accountNumber}</p>
                        </div>
                    </div>

                    {/* Stripe Donation Button */}
                    <button className="green-btn" id="donate-card-btn" onClick={handleOpenPaymentForm}>Donate via Card</button>

                    {showPaymentForm && (
                        <>
                            <div className="payment-overlay" onClick={handleClosePaymentForm}></div>
                            <div className="payment-form-container">
                            <button
                                className="close-icon"
                                aria-label="Close"
                                onClick={handleClosePaymentForm}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                            <h2>Enter Donation Amount</h2>
                            <input
                                type="number"
                                placeholder="Enter amount (£)"
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(e.target.value)}
                                className="donation-input"
                                min="1"
                            />
                            <Elements stripe={stripePromise}>
                                <PaymentForm amount={donationAmount * 100} onPaymentSuccess={handlePaymentSuccess} />
                            </Elements>
                            </div>
                        </>
                        )}


                    {/* Additional Fundraising Options */}
                    <div className="giving-options">
                        {config.giving.sections.map((section, index) => (
                            <div key={index} className="giving-section">
                                <h2>{section.title}</h2>
                                {section.link && (
                                    <a href={section.link.url} target="_blank" rel="noopener noreferrer" className="giving-link">
                                        {section.link.text}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}