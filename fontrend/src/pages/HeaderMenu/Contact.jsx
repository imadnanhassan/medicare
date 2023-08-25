import React from "react";

const Contact = () => {
  return (
    <section className="px-4 mx-auto max-w-screen-md">
      <h2 className="heading text-center">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-para">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias,
        sit?
      </p>
      <form action="#" className="space-y-8">
        <div>
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            className="mt-1 form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Let us know, how we can help you."
            className="mt-1 form-input"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="form-label">
            Your Message
          </label>
          <textarea
            rows="6"
            type="text"
            id="message"
            placeholder="Leave a comment..."
            className="mt-1 form-input"
          />
        </div>
        <button type="submit" className="btn sm:w-fit rounded-md px-8">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
