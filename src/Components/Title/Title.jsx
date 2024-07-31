import "../Title/Title.css";

function Title({ title, subtitle }) {
  return (
    <div className="title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
