function contenido(argt) {

	   switch(argt.id) {
      case "1":
          document.getElementById('Chiken').style.display="block";  
          document.getElementById('Beef').style.display="none";
          document.getElementById('Sushi').style.display="none";        
        break;
      case "2":
          document.getElementById('Beef').style.display="block";
          document.getElementById('Sushi').style.display="none";
          document.getElementById('Chiken').style.display="none"; 
        break;
      case "3":
          document.getElementById('Sushi').style.display="block";
          document.getElementById('Beef').style.display="none";
          document.getElementById('Chiken').style.display="none"; 
        break;        


   }	
}