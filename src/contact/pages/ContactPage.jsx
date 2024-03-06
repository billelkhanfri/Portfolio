import Footer from "../../common/components/Footer";
import PageHeader from "../../common/components/PageHeader";
import SettingBox from "../../common/components/SettingBox";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <>
      <SettingBox></SettingBox>
      <PageHeader> </PageHeader>
      <div style={{ backgroundColor: "rgb(247,247,247)" }}>
        <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ContactPage;
