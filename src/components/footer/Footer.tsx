const Footer = () => {
   const date = new Date().getFullYear();
   const name = "__ImmanuelCode__";

   return (
      <footer>
         <hr />
         <p>
            &copy; {date} {name}
         </p>
      </footer>
   );
};

export default Footer;
