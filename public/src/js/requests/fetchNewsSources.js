import { toggleTabs } from "../hendlers/toggler";
import { newsItemClickHandler } from "../hendlers/newsItemClickHandler";
import { showProloader } from "../utils/helpers";

export const fetchNewsSources = renderHtml => {
  
  let url = `https://newsapi.org/v2/sources?apiKey=f792cbef6ef14ad0b093ab88c321ea24`;
  let req = new Request(url);
  
  showProloader();

  fetch(req)
    .then(response => response.json())
    .then(data => {
      renderHtml(data);
      toggleTabs();
      newsItemClickHandler();
    });
}
