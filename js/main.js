// Scroll animations.
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: "#services",
  triggerHook: "1" })
					.setClassToggle("#services", "services-show")
					.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
          .addTo(controller);

// Animations of services.
var test = document.getElementById("projects_and_experiments").addEventListener("mouseenter", function(){
  document.getElementById("projects_and_experiments_image").src = "media/icons/notebook.svg"
});

var test = document.getElementById("projects_and_experiments").addEventListener("mouseleave", function(){
  document.getElementById("projects_and_experiments_image").src = "media/icons/erlenmeyer_flask.svg"
});

// Button of more informations (discover more about me not, discover more about projects).
// Should add animation.
var goToServicesSection = document.getElementsByName("go_to_services")[0];
goToServicesSection.addEventListener("click", function(){
  window.location = '#services';
});

// Buttons of footer.

// Initialize status options (selecetd setting)
document.getElementsByName("nothing")[0].className += " active";
document.getElementsByName("lang_en")[0].className += " active";
document.getElementsByName("theme_light")[0].className += " active";

// Check for clicked buttons. Change style, not animation on pressed.
var footerOptions = document.getElementsByClassName("footer-option");
for (var i = 0; i < footerOptions.length; i++) {
  var footerButtons = footerOptions[i].getElementsByClassName("footer-button");
  for (var a = 0; a < footerButtons.length; a++) {
    footerButtons[a].addEventListener("click", function(){
      var parentOption = this.parentNode;
      for (var c = 0; c < parentOption.getElementsByClassName("footer-button").length; c++) {
        parentOption.getElementsByClassName("footer-button")[c].className = this.parentNode.getElementsByClassName("footer-button")[c].className.replace(" active", "");
      }
      this.className += " active";
      switch (this.name) {
        case "go_top":
        document.body.scrollTop = 0;

          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          //document.documentElement.scrollTop = 0;
          // Add delay and animation. Why I can't use parentOption?
          document.getElementsByName("nothing")[0].click();
          break;
        case "lang_en":

          break;
        default:

      }
      // End of click listener
    });
  }
}
