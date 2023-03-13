class UI {

    PrintInterfacePrin(discography)
    {
        let main = document.createElement("main");
        let h1 = document.createElement("h1");
        h1.textContent = discography.title;

        let selectDiv = document.createElement("div");
        selectDiv.className = "selector";
        //boton crear nuevo disco
       /* let createButton = document.createElement("button");
        createButton.setAttribute("onclick","CrearDisco()")
        createButton.className="start_options";
        createButton.textContent = "Crear disco";

        selectDiv.appendChild(createButton);*/
        
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

        let articlePlus = document.createElement("article");
        articlePlus.className = "articlePlus";

        let imgPlus = document.createElement("img");
        imgPlus.setAttribute("id","imgPlus");
        imgPlus.setAttribute("src","src/circulo-plus.png");
        imgPlus.setAttribute("onclick","FormActivate()");

        
        articlePlus.appendChild(imgPlus);
        section.appendChild(articlePlus);
    }
    PrintFormulary(){
        let article = document.getElementsByClassName("articlePlus")[0];
    console.log("form activado");

    let form = document.createElement("form");

    let labelN = document.createElement("label");
    labelN.setAttribute("for","name");
    labelN.textContent = "Album:";
    form.appendChild(labelN);

//    form.innerHTML = "<br>";

    let inputN = document.createElement("input");
    inputN.setAttribute("type","text");
    inputN.setAttribute("id","name");
    inputN.setAttribute("name","name");
    form.appendChild(inputN);

 //   form.innerHTML = "<br>";

    let labelA = document.createElement("label");
    labelA.setAttribute("for","author");
    labelA.textContent = "Autor:";
    form.appendChild(labelA);

 //   form.innerHTML = "<br>";

    let inputA = document.createElement("input");
    inputA.setAttribute("type","text");
    inputA.setAttribute("id","author");
    inputA.setAttribute("name","author");
    form.appendChild(inputA);

//    form.innerHTML = "<br>";

    let labelY = document.createElement("label");
    labelY.setAttribute("for","year");
    labelY.textContent = "Año:";
    form.appendChild(labelY);

//    form.innerHTML = "<br>";

    let inputY = document.createElement("input");
    inputY.setAttribute("type","text");
    inputY.setAttribute("id","year");
    inputY.setAttribute("name","year");
    form.appendChild(inputY);

    //form.innerHTML = "<br>";

    let labelT = document.createElement("label");
    labelT.setAttribute("for","type");
    labelT.textContent = "Género:";
    form.appendChild(labelT);

   // form.innerHTML = "<br>";

    let inputT = document.createElement("input");
    inputT.setAttribute("type","text");
    inputT.setAttribute("id","type");
    inputT.setAttribute("name","type");
    form.appendChild(inputT);

   // form.innerHTML = "<br>";

    let labelURL = document.createElement("label");
    labelURL.setAttribute("for","url");
    labelURL.textContent = "URL:";
    form.appendChild(labelURL);

//    form.innerHTML = "<br>";

    let inputURL = document.createElement("input");
    inputURL.setAttribute("type","text");
    inputURL.setAttribute("id","url");
    inputY.setAttribute("name","url");
    form.appendChild(inputURL);

    article.appendChild(form);
    let imgPlus = document.getElementById("imgPlus");

    let buttonCreate = document.createElement("button");
    buttonCreate.className = "createDiskButton";
    buttonCreate.setAttribute("onclick","CreateDiskForm()");
    article.appendChild(buttonCreate);
    buttonCreate.innerHTML = "<p>Crear Disco</p>";

    imgPlus.remove();


    }
}