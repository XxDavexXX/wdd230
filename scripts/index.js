document.addEventListener("DOMContentLoaded", function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navbar_container');
    const main = document.getElementsByTagName('main')[0];

    hamButton.addEventListener('click', () => {
        if (navigation.style.display === "none" || navigation.style.display === "") {
            navigation.style.display = "block";
            main.style.marginTop = "250px";
        } else {
            navigation.style.display = "none";
            main.style.marginTop = "0px";
        }
        hamButton.classList.toggle('open');
    });

    const switchInput = document.getElementById('switchInput');

    switchInput.addEventListener('change', function() {
      const circle = document.querySelector('.slider .circle');
      const isChecked = this.checked;

    //   elemento to change color 
     const container_photo_name = document.querySelector('.container_photo_name');
     const h2one = document.querySelector('.card_sections_container .card h2');
     const h2dos = document.querySelector('.information');
     const circles = document.querySelector('.circle');
     const footer = document.querySelector('.footer');

      if (isChecked) {
        circle.style.backgroundImage = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTQuMiAyLjVsLS43IDEuOC0xLjguNyAxLjguNy43IDEuOC42LTEuOEw2LjcgNWwtMS45LS43LS42LTEuOHptMTUgOC4zYTYuNyA2LjcgMCAxMS02LjYtNi42IDUuOCA1LjggMCAwMDYuNiA2LjZ6IiAvPgo8L3N2Zz4=')";
        container_photo_name.style.backgroundColor = "rgb(0 0 0)";
        circles.style.backgroundColor = "rgb(0 0 0)";
        h2one.style.backgroundColor = "rgb(0 0 0)";
        h2dos.style.backgroundColor = "rgb(0 0 0)";
        footer.style.backgroundColor = "rgb(0 0 0)";
        console.log("nigth");
    } else {
        circle.style.backgroundImage = "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTkuMzA1IDEuNjY3VjMuNzVoMS4zODlWMS42NjdoLTEuMzl6bS00LjcwNyAxLjk1bC0uOTgyLjk4Mkw1LjA5IDYuMDcybC45ODItLjk4Mi0xLjQ3My0xLjQ3M3ptMTAuODAyIDBMMTMuOTI3IDUuMDlsLjk4Mi45ODIgMS40NzMtMS40NzMtLjk4Mi0uOTgyek0xMCA1LjEzOWE0Ljg3MiA0Ljg3MiAwIDAwLTQuODYyIDQuODZBNC44NzIgNC44NzIgMCAwMDEwIDE0Ljg2MiA0Ljg3MiA0Ljg3MiAwIDAwMTQuODYgMTAgNC44NzIgNC44NzIgMCAwMDEwIDUuMTM5em0wIDEuMzg5QTMuNDYyIDMuNDYyIDAgMDExMy40NzEgMTBhMy40NjIgMy40NjIgMCAwMS0zLjQ3MyAzLjQ3MkEzLjQ2MiAzLjQ2MiAwIDAxNi41MjcgMTAgMy40NjIgMy40NjIgMCAwMTEwIDYuNTI4ek0xLjY2NSA5LjMwNXYxLjM5aDIuMDgzdi0xLjM5SDEuNjY2em0xNC41ODMgMHYxLjM5aDIuMDg0di0xLjM5aC0yLjA4NHpNNS4wOSAxMy45MjhMMy42MTYgMTUuNGwuOTgyLjk4MiAxLjQ3My0xLjQ3My0uOTgyLS45ODJ6bTkuODIgMGwtLjk4Mi45ODIgMS40NzMgMS40NzMuOTgyLS45ODItMS40NzMtMS40NzN6TTkuMzA1IDE2LjI1djIuMDgzaDEuMzg5VjE2LjI1aC0xLjM5eiIgLz4KPC9zdmc+')";
        container_photo_name.style.backgroundColor = "rgb(11, 67, 104)"
        circles.style.backgroundColor = "rgb(0, 56, 146)"
        h2one.style.backgroundColor = "rgb(11, 67, 104)";
        h2dos.style.backgroundColor = "rgb(11, 67, 104)";
        footer.style.backgroundColor = "rgb(11, 67, 104)";
        console.log("day");
      }
    });
});
