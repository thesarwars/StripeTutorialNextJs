'use client'
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import ApiUrl from "@/app/url-lib/api-url";

export default function StripeCheckout() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState(null);

  //?success=True&sessionId=cs_test_a1y9TZAjlaUhHc6qT6LVyFCE0JyLESZdNvqkE31qyHXVNBJy1Pld9N1bH3

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    if (searchParams.get("success") === "True") {
      console.log("Order placed! You will receive an email confirmation.");
      setMessage(
        "Your payment has been succesfully paid, you'll receive an email within 24 hours."
      );
    }

    if (searchParams.get("success") === "False") {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
      setMessage(
        "There is something wrong with the payment!! payment has failed."
      );
    }
  }, [searchParams]);
  return (
    <div>
      <h1 className="text-white">{message}</h1>
    </div>
  );
}
