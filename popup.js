// popup.js - Exit-intent popup for cookie placement
(function(){
  let exitShown = false;
  const popup = document.getElementById('exitPopup');
  if(!popup) return; // stop if popup div not on page

  // Only trigger once per day
  if(document.cookie.includes("exitShown=true")) return;

  document.addEventListener('mouseleave', function(e){
    if(e.clientY < 10 && !exitShown){
      exitShown = true;

      // Show popup
      popup.style.display = 'block';

      // Set affiliate cookie for 30 days
      document.cookie = "aff=true;path=/;max-age=" + 30*24*60*60;

      // Set session cookie to avoid repeat for 1 day
      document.cookie = "exitShown=true;path=/;max-age=" + 24*60*60;

      // Hide popup after 3 seconds
      setTimeout(() => { popup.style.display = 'none'; }, 3000);
    }
  });
})();
