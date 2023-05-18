/* eslint-disable react/prop-types */
export const Accordion = ({ section }) => (
  <div className="accordion">
    {section.map((item) => (
      <div key={item.title} className="accordion__item">
        <div className="accordion__title">
          <h2>{item.title}</h2>
        </div>
        <div className="accordion__content">{item.content}</div>
      </div>
    ))}
  </div>
);
