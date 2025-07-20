// Step 1: Handle Popup and Email Interface

document.getElementById("open-email").addEventListener("click", function() {
    document.getElementById("popup-section").style.display = "none";
    document.getElementById("email-section").style.display = "block";
    document.getElementById("tip1").style.display = "none"; // Hide tip 1
    document.getElementById("tip2").style.display = "block"; // Show tip 2
  });
  
  document.getElementById("open-attachment").addEventListener("click", function() {
    document.getElementById("email-section").classList.add("fade-out");
    setTimeout(function() {
      document.getElementById("email-section").style.display = "none";
      document.getElementById("file-encryption").style.display = "block";
      encryptFiles();
    }, 1000); // Delay to allow fade out
  });
  
  document.getElementById("ignore-email").addEventListener("click", function() {
    document.getElementById("email-feedback").innerHTML = "You ignored the email. Make sure to check your notifications regularly.";
    document.getElementById("ignore-email").disabled = true;
    disableEmailButtons();
  });
  
  // Disable Email Buttons
  function disableEmailButtons() {
    document.getElementById("open-attachment").style.display = "none";
    document.getElementById("ignore-email").style.display = "none";
  }
  
  // Step 2: File Encryption Simulation
  function encryptFiles() {
    let files = ["Documents", "Photos.zip", "ImportantDocs.docx", "Work_Presentation.ppt", "Personal_Data.xlsx"];
    let encryptionProgress = document.getElementById("encryption-status");
    let index = 0;
  
    let interval = setInterval(function() {
      if (index < files.length) {
        document.getElementById("file" + (index + 1)).innerHTML = "🔒 " + files[index] + " (Encrypted)";
        index++;
      } else {
        clearInterval(interval);
        showRansomAlert();
      }
    }, 1000);
  }


  // Step 3: Show Ransom Alert
  function showRansomAlert() {
    // document.getElementById("file-encryption").style.display = "none";
    document.getElementById("ransom-alert").style.display = "block";
    document.getElementById("tip3").style.display = "block"; // Show tip 3
  }
  
  // Step 4: Handle Ransom Payment and Restore Backup
  document.getElementById("pay-ransom").addEventListener("click", function() {
    document.getElementById("ransom-feedback").innerHTML = "You have paid the ransom, but your files remain encrypted. Ransomware attackers don't always honor the payment!";
    disableButtons("pay-ransom");
    document.getElementById("action-section").style.display = "block";
  });
  
  document.getElementById("restore-backup").addEventListener("click", function() {
    document.getElementById("ransom-feedback").innerHTML = "Backup successfully restored! Your files are now safe.";
    disableButtons("restore-backup");
  });
   
  //Actions to take display(dekhte hai baad me)
  

  // Step 5: Disable and Hide Other Buttons after a choice
  function disableButtons(selectedButton) {
    if (selectedButton === "pay-ransom") {
      document.getElementById("restore-backup").style.display = "none";
    } else {
      document.getElementById("pay-ransom").style.display = "none";
    }
    document.getElementById("pay-ransom").disabled = true;
    document.getElementById("restore-backup").disabled = true;
    document.getElementById("tip4").style.display = "block"; // Show tip 4
  }
  function restartSimulation() {
    location.reload();
}

 


  