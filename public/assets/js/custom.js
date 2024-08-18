// Tooltip
document.addEventListener("DOMContentLoaded", function () {
  var tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltips.forEach(function (tooltip) {
    new bootstrap.Tooltip(tooltip);
  });
});

// Popover
document.addEventListener("DOMContentLoaded", function () {
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
});

