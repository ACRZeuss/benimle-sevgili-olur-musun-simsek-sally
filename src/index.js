function moveButton() {
    var button = document.getElementById("button2");
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
    var containerWidth = 600;
    var containerHeight = 250;

    // Butonun rastgele x ve y konumları hesaplanır
    var maxX = containerWidth - buttonWidth;
    var maxY = containerHeight - buttonHeight;
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    // Butonun pozisyonu ayarlanır
    button.style.left = newX + "px";
    button.style.top = newY + "px";
  }