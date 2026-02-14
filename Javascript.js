function enterSite() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  document.getElementById("music").play().catch(()=>{});
}
