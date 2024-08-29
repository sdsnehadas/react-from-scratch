import User from "./UserClass";

const ContactUs =() =>{
    return (
        <div className="container">
        <header className="header">
          <h1>Contact Us</h1>
        </header>
        <section className="section">
          <h2>Email</h2>
          <p>
            Our mission is to [insert mission statement here]. We strive to provide the best services and products to our customers, ensuring top-notch quality and customer satisfaction.
          </p>
        </section>
        <section className="section">
          <h2>Instagram</h2>
          <p>
            Founded in [year], our company started with the vision to [insert company vision here]. Over the years, we have grown into [brief history and milestones].
          </p>
        </section>
        <section className="section">
          <h2>Our Team</h2>
          <p>
            Our team is composed of talented individuals from diverse backgrounds, all dedicated to achieving our common goals. Meet the people who make it all happen:
          </p>
          <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - CTO</li>
            <li>Mike Johnson - Lead Developer</li>
            <li>Sarah Brown - Marketing Manager</li>

            <User name={"first"} designation={"ceo"}></User>
            <User name={"second"} designation={"cto"}></User>
            <User name={"third"} designation={"lead developer"}></User>

          </ul>
        </section>
        <section className="section">
          <h2>Contact Us</h2>
          <p>
            Have questions or want to get in touch? Reach out to us at <a href="mailto:contact@company.com">contact@company.com</a>.
          </p>
        </section>
      </div>
    )
}
export default ContactUs;