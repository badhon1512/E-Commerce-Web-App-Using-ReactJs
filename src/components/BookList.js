

function Book(props)
{
 ///alert(props);

 return(
   <div className={'book'}>
   <img src={props.book.src}/>
   <h4>{props.book.name}</h4>
   <h5>{props.book.author}</h5>
   <h6>{props.book.price}</h6>

   </div>

 )
  


}
const bookList=
  [{'name':'Knock Knock What I Love about You Fill in the Love Book Fill-in-the-Blank Gift Journal, 4.5 x 3.25-Inches',
  'author':'Knock Knock',
  'price':'$7.5',
  'src':'https://images-na.ssl-images-amazon.com/images/I/81kbmVHUxpL._AC_UL200_SR200,200_.jpg'
},
{'name':"Happy Valentine's Day, Mouse! (If You Give...) Board book – Illustrated, December 17, 2019",
  'author':' Laura Numeroff',
  'price':'$8.5',
  'src':'https://images-na.ssl-images-amazon.com/images/I/51EyGXJ1lXL._SY498_BO1,204,203,200_.jpg'
},
{'name':"The Sanatorium: A Novel",
  'author':' Sarah Pearse',
  'price':'$18.5',
  'src':'https://images-na.ssl-images-amazon.com/images/I/A16oEL6SBQL._AC_UL200_SR200,200_.jpg'
},
{'name':"The Sanatorium: A Novel",
  'author':' Sarah Pearse',
  'price':'$18.5',
  'src':'https://images-na.ssl-images-amazon.com/images/I/A16oEL6SBQL._AC_UL200_SR200,200_.jpg'
}
];

function BookList()
{

  return(
<div className='booklist'>
    {
      bookList.map((book)=>
        <Book book={book}/>
        


      )
    }
</div>
   
  )
}

export default BookList;