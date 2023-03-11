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

    DeleteDisk(localitation) {
        for (let i = 0; i < this.discs.length; i++) {
            if (this.discs[i].localitation == localitation) {
                this.discs.splice(i, 1);
            }
        }
    }

    SortDisk(p) {
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

            /*for(let element of disk)
            {
                if(variablesName(element) != cover)
                {
                    chipChop.push(element);
                }
            }*/
            aWithOutImg.push(chipChop);
        }
        return aWithOutImg;
    }
}

let discography = new Discography("Discográfia");
let pantalla = new UI();

function Main() {
    fetch('discography.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (dataJson) {
            for (let disco of dataJson.discos) {
                let disk = new Disk();
                disk.CreateDisk(disco.name, disco.autor[0].nickname, disco.year, disco.type, disco.cover, disco.localitation);
                discography.AddDisk(disk);
            }

            discography.SortDisk("name");
            pantalla.PrintDiscography(discography);
        })
        .catch(function (error) {
            console.log(error)
        });

}

function Delete(localitation)
{
    let main = document.querySelector("main");
    discography.DeleteDisk(localitation);
    console.log(discography.discs);
    main.remove();
    pantalla.PrintDiscography(discography);
}