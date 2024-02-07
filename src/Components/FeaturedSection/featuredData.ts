import ncompass from "../../assets/featured/Ncompass.png";
import crowdsnap from "../../assets/featured/crowdsnap.png";
import petcare from "../../assets/featured/petcare.png";
import vocalize from "../../assets/featured/vocalize.png";

export type Feature = {
  title: string;
  image: string;
  body: string;
  link: string;
};

export const featuredData: Feature[] = [
  {
    title: "NCompass CRM",
    image: ncompass,
    link: "https://www.behance.net/gallery/179299643/NCompass-CRM",
    body: "The application is designed specifically for Customer Relationship Management, tailored to meet the needs of student-run volunteering organizations. It simplifies event management by automating manual tasks and streamlines partnership management. The goal is to make it easier for these organizations to organize events efficiently and manage partnerships seamlessly, allowing them to focus on their main mission of making a positive impact.",
  },
  {
    title: "Vocalize",
    image: vocalize,
    link: "https://www.behance.net/gallery/176238683/Voice-Training-App-UI",
    body: "A user-friendly vocal training app aimed at enhancing singing skills and expanding vocal ranges. With personalized lessons and activities, users can practice at their own pace and skill level, making the learning process both engaging and rewarding. Whether you're a beginner or looking to refine your singing abilities, this app provides a convenient and effective way to boost your vocal prowess.",
  },
  {
    title: "Crowd Snap",
    image: crowdsnap,
    link: "https://www.behance.net/gallery/177113551/Survey-Web-App-Ui-Ux-Case-Study",
    body: "An innovative research assistant powered by AI and blockchain technology, dedicated to simplifying the data collection and analysis process while enhancing the overall user experience. This cutting-edge solution goes beyond traditional methods by supporting the creation of surveys that are AI-powered. Users can leverage the advanced capabilities of artificial intelligence to streamline and optimize the collection and analysis of research data.",
  },
  {
    title: "Pet Care Mobile Application",
    image: petcare,
    link: "https://www.behance.net/gallery/161034759/Mobile-App-UX-Case-Study",
    body: "A hypothetical pet care mobile application from a tech company specializing in embedded microchips for the pet care industry. These microchips are designed to be placed under the skin of pets, enabling owners to track and respond to their pet's status based on the data sent by the chip. With this app, pet owners can stay connected with their furry friends, monitor their well-being, and take prompt actions to ensure the health and happiness of their pets.",
  },
];
