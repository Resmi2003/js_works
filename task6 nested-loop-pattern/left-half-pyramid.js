// Left Half Pyramid

/*

                  *
               *  *
            *  *  *
      *  *  *  *  *
   *  *  *  *  *  *
   
*/

for(let row=1;row<=5;row++){

   let pattern = "";


   for(let column=1;column<=6;column++){

      if(row==5 || column==6 || column==5 && row>=2 || column==4 && row>=3 || row==4 && column>=2){
         pattern += "* ";
      }
      else{
         pattern += "  ";
      }


   }

   console.log(pattern);
   
}