const renderer = window.require('electron').ipcRenderer;

window.addEventListener("DOMContentLoaded", () => {
  window.ipcRenderer = renderer;
  
});