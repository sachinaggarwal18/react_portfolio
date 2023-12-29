import React from "react";

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
    <img
      src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/user_man_male_profile_account-512.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
