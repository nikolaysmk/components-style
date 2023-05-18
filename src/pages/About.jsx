import { Accordion } from "../components/accordion";
import { accordionData } from "../data/accordionData";

export const About = () => {
  return (
    <div>
      <Accordion section={accordionData}>This is in About</Accordion>
    </div>
  );
};
