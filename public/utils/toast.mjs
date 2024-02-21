var count = 0;
export class Toast {
  constructor(message, color, time, next) {
    this.message = message;
    this.color = color;
    this.time = time;
    this.element = null;
    var element = document.createElement("div");
    element.id = "toast-notification";
    element.className = "row space-between align-item-center";
    this.element = element;
    var countElements = document.getElementById("toast-notification");

    element.style.backgroundColor = this.color;

    var message = document.createElement("div");
    message.className = "message-container";
    message.textContent = this.message;

    element.appendChild(message);

    var close = document.createElement("div");
    close.className = "close-notification";
    var icon = document.createElement("i");
    icon.className = "fa-solid fa-xmark";
    close.appendChild(icon);
    element.append(close);
    document.body.appendChild(element);

    setTimeout(function () {
      element.remove();
      if(next != null){
        window.location.href = next;
      }
    }, this.time);

    close.addEventListener("click", () => {
      element.remove();
    });
  }
}
