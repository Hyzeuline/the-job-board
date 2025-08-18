const Footer = props => {
  return (
    <footer>
      Made with <span>{props.techno}</span> at <span>{props.school}</span> by{" "}
      <span>{props.name}</span>
    </footer>
  );
};

export default Footer;
