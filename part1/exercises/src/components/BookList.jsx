export default function BookList() {
   let pageTitle = "Books Read";
   let book1 = "https://dw9to29mmj727.cloudfront.net/products/1974743292.jpg";
   let book2 = "https://m.media-amazon.com/images/I/419AtPPHdJL._SX342_SY445_.jpg";
   let book3 = "https://upload.wikimedia.org/wikipedia/commons/b/ba/ArthurConanDoyle_AStudyInScarlet.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Spy X Family Vol. 11" />
         <img src={book2} alt="Think Like a Detective" />
         <img src={book3} alt="Sherlock Holmes A Study in Scarlet" />
      </div>      
   );
}