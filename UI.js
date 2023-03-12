class UI {

    PrintInterfacePrin(discography)
    {
        let main = document.createElement("main");
        let h1 = document.createElement("h1");
        h1.textContent = discography.title;

        let selectDiv = document.createElement("div");
        selectDiv.className = "selector";
        //boton crear nuevo disco
        let createButton = document.createElement("button");
        createButton.setAttribute("onclick","CrearDisco()")
        createButton.className="start_options";
        createButton.textContent = "Crear disco";

        selectDiv.appendChild(createButton);
        
        //select y boton ordenar


        let select = document.createElement("select");
        select.setAttribute("name", "propiedades");
        select.setAttribute("id", "propiedades");
        select.setAttribute("onchange","Ordenar()")
        select.className="start_options";

        //opciones del select y apendizamiento

        let opName = document.createElement("option");
        opName.setAttribute("value", "name");
        opName.textContent = "Nombre";
        let opAutor = document.createElement("option");
        opAutor.setAttribute("value", "nickname");
        opAutor.textContent = "Autor";
        let opYear = document.createElement("option");
        opYear.setAttribute("value", "year");
        opYear.textContent = "Año";
        let opGenero = document.createElement("option");
        opGenero.setAttribute("value", "type");
        opGenero.textContent = "Género";

        select.appendChild(opName);
        select.appendChild(opYear);
        select.appendChild(opAutor);
        select.appendChild(opGenero);


        //appends

        selectDiv.appendChild(select);

        main.appendChild(h1);
        main.appendChild(selectDiv);
        ///apend main al body
        document.body.appendChild(main);
    }
    PrintDiscography(discography) 
    {
        let main = document.querySelector("main");
        let section = document.createElement("section");
        for (let disk of discography.discs) {

            //articulo img div de texto y
            let article = document.createElement("article");

            let div = document.createElement("div");
            let img = document.createElement("img");

            let src = document.createAttribute("src");
            let alt = document.createAttribute("alt");
            //info texto
            div.innerHTML = "<p><b>Álbum:</b>" + disk.name + "</p><p><b>Autor:</b>" + disk.author.nickname + "</p><p><b>Año:</b>" + disk.year + "</p><p><b>Género:</b>" + disk.type + "</p>";
            //asignacion valors atributos
            src.value = disk.cover;
            alt.value = disk.name;

            img.setAttributeNode(src);
            img.setAttributeNode(alt);

            //botones y valores

            let button = document.createElement("button");

            button.setAttribute("onclick", "Delete(" + disk.localitation + ")");
            button.className = "deleteButton";
            button.innerHTML = "<p>Eliminar</p> ";

            //apendizar all.

            article.appendChild(button);
            article.appendChild(div);
            article.appendChild(img);
            section.appendChild(article);
            main.appendChild(section);

        }

    }
}