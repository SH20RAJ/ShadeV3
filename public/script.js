document?.addEventListener('DOMContentLoaded', function () {
  var modeSwitch = document.querySelector('.mode-switch');

  modeSwitch?.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'

    }
  });
  
  var listView = document.querySelector('.list-view');
  var gridView = document.querySelector('.grid-view');
  var projectsList = document.querySelector('.project-boxes');
  
  listView?.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
  });
  
  gridView?.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
  });
  
  document.querySelector('.messages-btn')?.addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
  });
  
  document.querySelector('.messages-close')?.addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
  });
});


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  localStorage.theme = 'dark'
  
} else {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light'

}

// Whenever the user explicitly chooses light mode

// Whenever the user explicitly chooses dark mode

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')