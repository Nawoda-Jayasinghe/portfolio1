import gaveen from "../../assets/testimonials/gaveen.jpeg";
import mino from "../../assets/testimonials/mino.jpeg";
import shebin from "../../assets/testimonials/shebin.jpeg";

export type Testimonial = {
  image: string;
  message: string;
  position: string;
};

const testimonials: Testimonial[] = [
  {
    image: mino,
    message:
      "Nawoda is a designer with an incredible attention to detail and extensive talent in designing complex, scalable digital experiences. She possesses a unique talent to empathize with the users and identify edge cases to offer the best experience to the users of her designs. Her collaboration skills with the team is also commendable. She has the ability to correctly judge the scope of the project and determine feasibility to design perfect experience. In conclusion, I have the utmost confidence in recommending Nawoda for any design opportunities. Their exceptional skills, collaborative nature, and unwavering dedication make them a valuable asset to any team or project.",
    position: "Mino Gallawatta - Senior UX Designer at IFS",
  },
  {
    image: shebin,
    message:
      "I have worked with many designers in the past, but none of them come close to Nawoda jayasinghe. She has excellent design skills and is also technically efficient. She was able to understand my requirements very quickly and delivered the project on time. The quality of her work is amazing, and I am sure you will be happy with the results if you choose to work with her.",
    position:
      "Shebin Hassan - Chief Executive Officer, Dependopolis Consulting Limited, London",
  },
  {
    image: gaveen,
    message:
      "I had the pleasure of working with Nawoda in the UX design team at Rootcode Studio. I was consistently impressed by her strong visual design skills and her ability to translate complex design concepts into intuitive and visually stunning interfaces. Nawoda is a true asset to any team. She is a proactive problem-solver who is not afraid to take on new challenges and is always looking for ways to improve her skills. She is also a fantastic team player and was a valuable contributor to all of the projects she was a part of. I highly recommend Nawoda for any UX design position. She has the talent, drive, and personality to excel in this field and will be a valuable addition to any organization.",
    position: "Gaveen Nanayakkara - Senior UX Designer",
  },
];

export default testimonials;
