function skip() {
  if (document.getElementById('nav-forward') || html5Iframe.contentwindow.document.getElementById('nav-forward')) { //check if lesson is open by finding elements inside the lesson
    try {
        Object.values(document.getElementById('nav-forward'))[1].onClick() // this function wont work in regular i-ready but just in case (call the function that gets called when you go forward in the lesson)
      } catch {
        Object.values(html5Iframe.contentwindow.document.getElementById('nav-forward'))[1].onClick() //call the function that gets called when you go forward in the lesson
    }
  } else {
    alert('open a lesson')
  }
};
