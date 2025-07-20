// script.js

document.addEventListener("DOMContentLoaded", function() {
    const reportPhishingButton = document.getElementById("report-phishing");
    const feedback = document.getElementById("feedback1");

    reportPhishingButton.addEventListener("click", function() {
        // feedback.textContent = "Correct! This is a phishing email. The link is suspicious and the sender's address looks off.  KEY POINTS TO CONSIDER: 1-logo of the sender  2-address of the sender 3-size and text visible on the link";
        feedback1.classList.remove("hidden");
        feedback1.classList.add("success");
        disableButtons("report-phishing");
    });
});
function restartSimulation() {
    location.reload();
}
document.getElementById("ignoree").addEventListener("click", function() {
//    feedback.textContent = "Correct! This is a phishing email. The link is suspicious and the sender's address looks off.  KEY POINTS TO CONSIDER: 1-logo of the sender  2-address of the sender 3-size and text visible on the link";
        feedback2.classList.remove("hidden");
        feedback2.classList.add("error");
        
  });

