<div class="popup" id="exitPopup" style="display:none;">
  <span>Wait! Don’t leave without checking our special offer!</span>
</div>

<script>
// Exit-intent cookie placement
(function(){
  let exitShown = false;
  const popup = document.getElementById('exitPopup');

  // Only show once per session
  if(document.cookie.includes("exitShown=true")) return;

  document.addEventListener('mouseleave', function(e){
    if(e.clientY < 10 && !exitShown){
      exitShown = true;

      // Show popup
      popup.style.display = 'block';

      // Set cookie immediately
      document.cookie = "aff=true;path=/;max-age=" + 30*24*60*60; // 30 days
      document.cookie = "exitShown=true;path=/;max-age=" + 24*60*60; // 1 day for exit intent

      // Hide popup automatically after 3 seconds
      setTimeout(() => {
        popup.style.display = 'none';
      }, 3000);
    }
  });
})();
</script>
