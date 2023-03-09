class Discography {
    nombreEmpresa;
    discs;
    constructor(nombreEmpresa) {
        this.nombreEmpresa = nombreEmpresa;
        this.discs = [];
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
                discography.discs.push(disk);
            }
            pantalla.PrintDiscography(discography);
        })
        .catch(function (error) {
            console.log(error)
            alert(error);
        });

}