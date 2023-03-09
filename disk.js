class Disk
{
    name;
    author;
    year;
    type;
    cover;
    #localitation;
    #borrowed;

    constructor()
    {
        this.name = "";
        this.author = "";
        this.year = "";
        this.type = "";
        this.cover = "";
        this.#localitation = 0;
        this.#borrowed = false;

    };

    CreateDisk(name,author,year,type,cover,localitation)
    {
        this.name = name;
        this.author = author;
        this.year = year;
        this.type = type;
        this.cover = cover;
        this.localitation = localitation;
    }

}

class Author
{
    #name;
    #surname;
    #nickname;

    get AuthorComplete()
    {
        return this.#name + this.#surname + " Alias:" + this.#nickname;
    }
    
    set AuthorComplete(changeAuthor)
    {
        if(changeAuthor.split(",").length == 3){
            this.#name = changeAuthor.split(",")[0];
            this.#surname = changeAuthor.split(",")[1];
            this.#nickname = changeAuthor.split(",")[2];
        }
        else
        {
            alert("Formato no vàlido");
        }
    }
}