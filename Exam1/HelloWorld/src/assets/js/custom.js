
//This is roman to arabic number convert function use switch-case to detect and convert and output display on screen
function myFunction(){
    var x = document.getElementById("romanInput").value;
        switch(x) { 
      case 'I': { 
        x='1'; 
         break; 
      }
      case 'II': { 
        x='2'; 
         break; 
      }
      case 'III': { 
        x='3'; 
         break; 
      }
      case 'IV': { 
        x='4'; 
         break; 
      }
      case 'V': { 
        x='5'; 
         break; 
      }
      case 'VI': { 
        x='6'; 
         break; 
      }
      case 'VII': { 
        x='7'; 
         break; 
      }
      case 'VIII': { 
        x='8'; 
         break; 
      }
      case 'IX': { 
        x='9'; 
         break; 
      }
      case 'X': { 
        x='10'; 
         break; 
      } 
      default: { 
         x="Need roman number"; 
         break; 
      } 
   } 
   //Out put arabic number on arabicNum element id
   document.getElementById("arabicNum").innerHTML =  x;
}

