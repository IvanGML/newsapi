export const toggleTabs = () => {
  const tabs = [...document.querySelectorAll('.news-tab')];
  const removeSelected = () => tabs.forEach(item => item.classList.remove('selected'));
  const switchContent = () => {
    let publishers = document.getElementById('publishers-info');
    let countries = document.getElementById('countries-info');
    countries.classList.toggle('not-display');
    publishers.classList.toggle('not-display');
  }

  tabs.forEach(elem => {
    elem.addEventListener("click", e => {
      removeSelected();
      switchContent();
      elem.classList.add('selected');
    });
  });
};

