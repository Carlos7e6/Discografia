class UI {
    PrintDiscography(discography) {
        let main = document.querySelector("main");
        let h1 = document.createElement("h1");
        let section = document.createElement("section");
        h1.textContent = discography.title;

        main.appendChild(h1);
        main.appendChild(section);


        for (let disk of discography.discs) 
        {
            let article = document.createElement("article");
            let div = document.createElement("div");
            let img = document.createElement("img");

            let src = document.createAttribute("src");
            let alt = document.createAttribute("alt");

            div.innerHTML = "<p><b>Álbum:</b>" + disk.name + "</p><p><b>Autor:</b>" + disk.author + "</p><p><b>Año:</b>" + disk.year + "</p><p><b>Género:</b>" + disk.type + "</p>";

            src.value = disk.cover;
            alt.value = disk.name;

            img.setAttributeNode(src);
            img.setAttributeNode(alt);

            article.appendChild(div);
            article.appendChild(img);

            section.appendChild(article);

        }
        console.log(discography.discs);

    }
}