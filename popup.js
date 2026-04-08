(function() {
  // Only show once per day
  if(document.cookie.includes("exitShown=true")) return;

  // Create popup dynamically
  const popup = document.createElement('div');
  popup.id = 'exitPopup';
  popup.style.position = 'fixed';
  popup.style.bottom = '20px';
  popup.style.right = '20px';
  popup.style.background = '#ff4136';
  popup.style.color = 'white';
  popup.style.padding = '15px 25px';
  popup.style.borderRadius = '10px';
  popup.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
  popup.style.fontSize = '16px';
  popup.style.zIndex = '9999';
  popup.style.display = 'none';
  popup.style.pointerEvents = 'auto';
  popup.textContent = "Wait! Don’t leave without checking our special offer!";

  document.body.appendChild(popup);

  let exitShown = false;

  document.addEventListener('mouseleave', function(e){
    if(e.clientY < 10 && !exitShown){
      exitShown = true;

      // Show popup
      popup.style.display = 'block';

      // Set affiliate cookie for 30 days
      document.cookie = "aff=true;path=/;max-age=" + 30*24*60*60;

      // Set session cookie to avoid repeat for 1 day
      document.cookie = "exitShown=true;path=/;max-age=" + 24*60*60;

      // Hide popup automatically after 3 seconds
      setTimeout(() => { popup.style.display = 'none'; }, 3000);
    }
  });
})();
