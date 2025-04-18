function ipvald (ipv) 
{
   let number = '' ;
   let valid = false ;
   let count = 1 ;

    
   

   for(let i = 0 ; i < ipv.length ; i++)
   {
       if(ipv[i] !== "."){
          number+=ipv[i]
       }else {
           if(number > 255){
             valid = false;
             count++;
           }else if (number < 255 || number >= 0) {
              valid = true
              count ++;
              number = '';
           }
       }
   }
   console.log(count);
   if(count > 4 ){
    return "ce ip adrise no valid";
   }

   return valid

}

console.log(ipvald("254.254.233.0"))




