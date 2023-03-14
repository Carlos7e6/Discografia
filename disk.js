class Disk
{
    name;
    author;
    year;
    type;
    cover;
    #localitation;
    #borrowed;

    set localitation(loc){
        this.#localitation=loc;
    }

    get localitation(){
        return this.#localitation;
    }

    set borrowed(bool){
        this.#borrowed = bool;
    }

    get borrowed(){
        return this.#borrowed;
    }
    constructor()
    {
        this.name = "";
      //  this.author = ""
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
    #name = "";
    #surname = "";
    #nickname = "";


   get nickname(){
        return this.#nickname;
    }

    set nickname(nickname)
    {
        this.#nickname = nickname;
    }

    get name(){
        return this.#name;
    }

    set name(name)
    {
        this.#name = name;
    }

    get surname(){
        return this.#name;
    }

    set surname(surname)
    {
        this.#surname = surname;
    }

    get AuthorComplete()
    {
        return this.#name + this.#surname + " Alias:" + this.nickname;
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