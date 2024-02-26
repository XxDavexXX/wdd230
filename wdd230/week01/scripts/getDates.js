document.addEventListener("DOMContentLoaded", function() {
    var yearDate = new Date().getFullYear();
    var spanDate = document.getElementById("year");
    spanDate.textContent = yearDate;
    var lastModifiedPTag = document.getElementById("lastModified");
    var lastModified = new Date(document.lastModified);
    var p_modified_html = lastModified.toLocaleString();
    lastModifiedPTag.textContent = "Last Modification: " + p_modified_html;
});
