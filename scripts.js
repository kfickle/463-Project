// get the current year to insert into the footer
let currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// create an projects containing three elements
$(document).ready(function () {
  $(".read-more-btn").click(function () {
    var $projectItem = $(this).closest(".project");
    var $projectContent = $projectItem.find(".project-content");

    $projectItem.toggleClass("active");
    $projectContent.slideToggle();

    var expanded = $projectItem.hasClass("active");
    $projectItem.find(".read-more-btn").attr("aria-expanded", expanded);
    $projectContent.attr("aria-hidden", !expanded);
  });
});
