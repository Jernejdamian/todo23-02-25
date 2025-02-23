import "./style.css";

const Section = ({ title, extraHeaderContent, body }) => (
    <section className="section">
        <header className="section__header">
            <h2>{title}</h2>
            {extraHeaderContent}
        </header>
        {body}
    </section>
);

export default Section;