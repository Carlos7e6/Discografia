class Discography {
    title;
    discs;
    constructor(title) {
        this.title = title;
        this.discs = [];
    }

    AddDisk(disk)
    {
        this.discs.push(disk);
    }

    DeleteDisk(localitation)
    {
        for(let i=0; i < this.discs.length;i++){
            if(this.discs[i].localitation == localitation)
            {
                this.discs.splice(i,1);
            }
        }
    }

    SortDisk()
    {
        discs.sort();
    }

    DiskWithoutImg()
    {
        let aWithOutImg = []

        for(let disk of this.discs)
        {
           let chipChop = [];
            chipChop.push(disk.name, disk.autor, disk.year,disk.type)

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

function Main() 
{
    fetch('discography.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (dataJson) {
            let discography = new Discography("Discografia");
            let pantalla = new UI();

            for (let disco of dataJson.discos) {
                let disk = new Disk();
                disk.CreateDisk(disco.name, disco.autor[0].nickname, disco.year, disco.type, disco.cover, disco.localitation);
                discography.AddDisk(disk);
            }
          //  discography.DeleteDisk(3);
          //discography.SortDisk(discography.discs);
            pantalla.PrintDiscography(discography);
            console.log(discography.DiskWithoutImg());
        })
        .catch(function (error) {
            console.log(error)
        });

}