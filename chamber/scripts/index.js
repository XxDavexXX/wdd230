document.addEventListener("DOMContentLoaded", function() {
  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.container_nav_responsive');

  hamButton.addEventListener('click', () => {
    if (navigation.style.display === "none" || navigation.style.display === "") {
      navigation.style.display = "block";
    } else {
      navigation.style.display = "none";
    }
    hamButton.classList.toggle('open');
  });

  const messageDiv = document.createElement('div');
  messageDiv.id = 'message';
  messageDiv.style.display = 'none';
  messageDiv.style.backgroundColor = '#f0f0f0';
  messageDiv.style.padding = '10px';
  messageDiv.style.textAlign = 'center';
  messageDiv.style.position = 'fixed';
  messageDiv.style.width = '100%';
  messageDiv.style.top = '0';
  messageDiv.style.zIndex = '9999';
  document.body.appendChild(messageDiv);

  if (!localStorage.getItem("lastVisit")) {
    messageDiv.innerText = "Welcome! Let us know if you have any questions";
    messageDiv.style.display = "block";
  } else {
    const lastVisit = new Date(localStorage.getItem("lastVisit"));
    const currentDate = new Date();

    const difference = currentDate - lastVisit;
    const oneDay = 24 * 60 * 60 * 1000; 

    const daysDifference = Math.floor(difference / oneDay);

    if (daysDifference === 0) {
      messageDiv.innerText = "We will be back so soon! Awesome!";
      messageDiv.style.display = "block";
    } else {
      if (daysDifference === 1) {
        messageDiv.innerText = "Last time visited was 1 day ago";
        messageDiv.style.display = "block";
      } else {
        messageDiv.innerText = `Last time visited was ${daysDifference} days ago`;
        messageDiv.style.display = "block";
      }
    }
  }

  localStorage.setItem("lastVisit", new Date());
});
