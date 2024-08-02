const Footer = () => {
   const date = new Date().getFullYear();
   const name = "__ImmanuelCode__";

   return (
      <footer>
         <hr />
         <a href="#">Back To Top</a>
         <p>
            &copy; {date} {name}
         </p>
      </footer>
   );
};

export default Footer;
