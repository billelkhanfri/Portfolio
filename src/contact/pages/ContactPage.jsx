import React from "react";
import Footer from "../../common/components/Footer";
import PageHeader from "../../common/components/PageHeader";
import Section from "../../common/components/Separator";
import SettingBox from "../../common/components/SettingBox";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <>
      <SettingBox></SettingBox>
      <PageHeader> </PageHeader>
      <Section title="Contact"></Section>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  );
}

export default ContactPage;
