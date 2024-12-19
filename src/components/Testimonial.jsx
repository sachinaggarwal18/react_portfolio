import React from "react";
import { FaRegUser } from "react-icons/fa";


const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Person1"}
          feedback={"Good luck for your future."}
        />

        <TestimonialCard
          name={"Person2"}
          feedback={
            "Your determination and hard work will surely lead to a bright future."
          }
        />

        <TestimonialCard
          name={"Person3"}
          feedback={"I wish you all the best for your future endeavors"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    {/* <img
      src="https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png"
      alt="User"
    /> */}
    <FaRegUser size={40} padding={20} />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
