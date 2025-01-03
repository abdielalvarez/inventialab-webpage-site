import Brief from "../../../block-pages/SuccessStories/BBVA/Brief";
import ContactUs from "../../../block-pages/SuccessStories/BBVA/ContactUs";
import Cover from "../../../block-pages/SuccessStories/BBVA/Cover";
import Main from "../../../block-pages/SuccessStories/BBVA/Main";
import Results from "../../../block-pages/SuccessStories/BBVA/Results";
import Success from "../../../block-pages/SuccessStories/BBVA/Success";
import React, { useEffect } from "react";

export default function SuccessStoriesBBVA() {

  useEffect(() => {
    document.title = "InventiaLab: BBVA";
  }, []);

  return (
    <>
      <main>
        <Main />
        <Cover />
        <Brief />
        <Results />
        <ContactUs />
        <Success />
      </main>
    </>
  );
}