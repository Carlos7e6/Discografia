class UI {

    PrintInterfacePrin(discography) {
        let main = document.createElement("main");
        let h1 = document.createElement("h1");
        h1.textContent = discography.title;

        let selectDiv = document.createElement("div");
        selectDiv.className = "selector";

        let select = document.createElement("select");
        select.setAttribute("name", "propiedades");
        select.setAttribute("id", "propiedades");
        select.setAttribute("onchange", "Ordenar()")
        select.className = "start_options";

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
    PrintDiscography(discography) {
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

        let articlePlus = document.createElement("article");
        articlePlus.className = "articlePlus";

        let imgPlus = document.createElement("img");
        imgPlus.setAttribute("id", "imgPlus");
        imgPlus.setAttribute("src", "src/circulo-plus.png");
        imgPlus.setAttribute("onclick", "FormActivate()");


        articlePlus.appendChild(imgPlus);
        section.appendChild(articlePlus);
    }
    PrintFormulary() 
    {
        let article = document.getElementsByClassName("articlePlus")[0];
        let form = document.createElement("form");

        let labelN = document.createElement("label");
        CreateLabel(labelN, "Nombre:", "name", form);

        let inputN = document.createElement("input");
        CreateInput(inputN,"name",form);

        let labelA = document.createElement("label");
        CreateLabel(labelA, "Autor:", "author", form);

        let inputA = document.createElement("input");
        CreateInput(inputA, "author", form);

        let labelY = document.createElement("label");
        CreateLabel(labelY, "Año", "year", form);

        let inputY = document.createElement("input");
        CreateInput(inputY, "year", form);

        let labelT = document.createElement("label");
        CreateLabel(labelT, "Género", "type", form);

        let inputT = document.createElement("input");
        CreateInput(inputT, "type", form);

        let labelURL = document.createElement("label");
        CreateLabel(labelURL, "URL", "url", form);

        let inputURL = document.createElement("input");
        CreateInput(inputURL, "url", form);

        article.appendChild(form);
        let imgPlus = document.getElementById("imgPlus");

        let buttonCreate = document.createElement("button");
        buttonCreate.setAttribute("ontouchstart", "CreateDiskForm()");
        buttonCreate.setAttribute("onclick", "CreateDiskForm()");
        buttonCreate.className = "createDiskButton";
        buttonCreate.innerHTML = "<p>Crear Disco</p>";
        article.appendChild(buttonCreate);

        imgPlus.remove();
    }
}

function CreateInput(name, atriName, form) {
    name.setAttribute("type", "text");
    name.setAttribute("id", atriName);
    name.setAttribute("name", atriName);
    form.appendChild(name);
}

function CreateLabel(name, textContent, forVal, form) {

    name.setAttribute("for", forVal);
    name.textContent = textContent;
    form.appendChild(name);
}
