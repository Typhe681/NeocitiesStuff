const digitsLength = 7; 

async function loadCounter() {
  const counter = document.getElementById("counter");
  counter.innerHTML = "loading...";
  try {
    const res = await fetch(
      "https://typhe681.github.io/neocities-counter/views.json"
    );

    const data = await res.json();
    const views = data.info.views;
    const digits = views.toString().padStart(digitsLength,"0").split("");
    counter.innerHTML = "";
    
    digits.forEach(d => {
      const img = document.createElement("img");
      img.src = d + ".gif";
      img.width = 37;
      counter.appendChild(img);
      counter.appendChild(document.createTextNode(" "));
    });
  } catch(e) {
    counter.innerHTML = "error: " + e;
  }
}

loadCounter();
