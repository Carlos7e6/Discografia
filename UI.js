class UI
{
    PrintDiscography(discography)
    {
        for(let disk of discography.discs)
        {
            let section = document.querySelector("section");
            let article = document.createElement("article");
           let div = document.createElement("div");
           let img = document.createElement("img");

           let src = document.createAttribute("src");
           let alt = document.createAttribute("alt");

           div.innerHTML = "<p><b>Álbum:</b>" + disk.name + "</p><p><b>Autor:</b>" + disk.author + "</p><p><b>Año:</b>" + disk.year + "</p>";

           src.value = disk.cover;
           alt.value = disk.name;

           img.setAttributeNode(src);
           img.setAttributeNode(alt);

           article.appendChild(div);
           article.appendChild(img);
           section.appendChild(article);
        }
    }
}