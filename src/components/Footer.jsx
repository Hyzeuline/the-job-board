const Footer = ({ techno, school, name }) => {
  return (
    <footer>
      Made with <span> {techno} </span> at <span> {school} </span> by
      <span>{name}</span>
    </footer>
  );
};

export default Footer;
