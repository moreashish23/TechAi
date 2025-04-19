document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const content = document.querySelector('.content');
  
    // Tab switching functionality
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
  
        const target = tab.getAttribute('data-tab');
        contents.forEach(c => c.classList.remove('active'));
        document.getElementById(target).classList.add('active');
  
        // Close the sidebar on mobile when a tab is clicked
        if (window.innerWidth <= 480) {
          sidebar.classList.remove('active');
          content.classList.remove('shifted');
        }
      });
    });
  
    // Sidebar toggle functionality
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      content.classList.toggle('shifted');
    });
  });
  