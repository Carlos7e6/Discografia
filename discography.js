class Discography {
    title;
    discs;
    constructor(title) {
        this.title = title;
        this.discs = [];
    }

    AddDisk(disk) {
        this.discs.push(disk);
    }
 //Borro segun localizador.
    DeleteDisk(localitation) {
        for (let i = 0; i < this.discs.length; i++) {
            if (this.discs[i].localitation == localitation) {
                this.discs.splice(i, 1);
            }
        }
    }

    SortDisk(p) {
        if(p == "nickname")
        {
            this.discs.sort((a, b) => {
            
                let fa = a["author"]["nickname"];
                let fb = b["author"]["nickname"];
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        }
        this.discs.sort((a, b) => {
            
            let fa = a[p];
            let fb = b[p];
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
    }

    DiskWithoutImg() {
        let aWithOutImg = []
        for (let disk of this.discs) {
            let chipChop = [];
            chipChop.push(disk.name, disk.autor, disk.year, disk.type)
            aWithOutImg.push(chipChop);
        }
        return aWithOutImg;
    }
}

let discography = new Discography("Discografia");
let pantalla = new UI();

function Main() {
    fetch('discography.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (dataJson) {
            for (let disco of dataJson.discos) {
                let disk = new Disk();
                disk.CreateDisk(disco.name, disco.autor[0], disco.year, disco.type, disco.cover, discography.discs.length+1);
                console.log(discography.discs.length);
                discography.AddDisk(disk);
            }

            pantalla.PrintInterfacePrin(discography);
            pantalla.PrintDiscography(discography);
        })
        .catch(function (error) {
            console.log(error)
        });

}

function Delete(localitation)
{
    let section = document.querySelector("section");
    discography.DeleteDisk(localitation);
    console.log(discography.discs);
    section.remove();
    pantalla.PrintDiscography(discography);
}

function Ordenar()
{
    let section = document.querySelector("section");
    let valor = document.getElementById("propiedades").value;
    discography.SortDisk(valor);
    section.remove();
    pantalla.PrintDiscography(discography);
}

function FormActivate()
{
    pantalla.PrintFormulary();
}

function CreateDiskForm()
{
    let values = document.getElementsByTagName("input");
    let newDisk = new Disk();
    let section = document.querySelector("section");
    newDisk.CreateDisk(values[0].value,values[1].value,values[2].value,values[3].value,values[4].value,discography.discs.length+1);
    discography.AddDisk(newDisk);
    section.remove();
    pantalla.PrintDiscography(discography);
}


