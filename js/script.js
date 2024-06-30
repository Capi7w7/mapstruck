
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".side-panel-toggle").addEventListener("click", () => {
        document.querySelector(".wrapper").classList.toggle("side-panel-open");
    });
});

function refreshPage() {
    location.reload();
}

function togglePanel(panelId) {
    const panel = document.getElementById(panelId);
    panel.classList.toggle('show');
}
