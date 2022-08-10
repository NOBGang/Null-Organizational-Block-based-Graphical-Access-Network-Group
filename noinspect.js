document.onkeydown = function(e) {
  //F12 or Fn+F12
      if(event.keyCode == 123) {
      alert("We told you, we don't have any sauce.");
      return false;
      }
  //Ctrl+Shift+I
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
      alert("Sorry, we don't have any sauce.");
      return false;
      }
  //Ctrl+Shift+J
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
      alert("We are very sorry, we don't have any sauce.");
      return false;
      }
  //Ctrl+Shift+U
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
      alert("Are you serious!.");
      return false;
      }
      }

  //Right Click
      document.addEventListener('contextmenu', function(e) {
      alert("Bad Mouse");
      e.preventDefault();
      });
