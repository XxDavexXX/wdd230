const baseURL = "https://github.com/XxDavexXX/wdd230";
const linksURL = "https://raw.githubusercontent.com/XxDavexXX/wdd230/main/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();