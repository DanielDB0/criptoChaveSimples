const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let frase = 'e barril kkkkk o alunozzz'

let chave = [2, 4, 1, 3, 5, 7, 6, 9, 8]
let msgContain = []
let chaveContain = []
let mensagem = ''

function cripto(){
    let nfrase = frase
    nfrase = nfrase.toUpperCase().replaceAll(' ', '')
    for (let i = 0; i < chave.length; i++) {
        chaveContain.push([])
    }
    console.log(chaveContain)

    for (let i = 0; i < Math.trunc(frase.length / chave.length); i++) {
        for (let j = 0; j < chave.length; j++) {
            chaveContain[j].push(nfrase[0])
            nfrase = nfrase.replace(nfrase[0],'')
        }
    }

    if(nfrase){
        for (let i = 0; i < nfrase.length; i++) {
            chaveContain[i].push(nfrase[0])
            nfrase = nfrase.replace(nfrase[0],'')      
        }
    }

    for (let i = 0; i < chave.length; i++) {
        for (let j = 0; j < chave.length; j++) {
            if(chave[j] == i + 1){
                msgContain.push(chaveContain[j])
            }
        }   
    }

    for (let i = 0; i < chave.length; i++) {
        for (let j = 0; j < msgContain[i].length; j++) {
            mensagem += msgContain[i][j]
        }
    }

}
/*
cripto()
console.log(chaveContain)
console.log(msgContain)
console.log(mensagem.replaceAll('undefined', ''))*/

//-----------------------------------------------------------------------------------------------------------------------------------------------------------


let chaveDecripto = [2, 4, 1, 3, 5, 7, 6, 9, 8]

let Fcripto = 'AKEKROBKRALUILKOKN'

let CmsgContain = []
let CchaveContain = []
let claro = ''

function decripta(){
    let nfrase = Fcripto

    for (let i = 0; i < chaveDecripto.length; i++) {
        CchaveContain.push([])
    }
    console.log(chaveContain)

    const lines = Math.trunc(Fcripto.length / chaveDecripto.length)
    const sobra = Fcripto.length - (lines * chaveDecripto.length)

    for (let i = 0; i < chaveDecripto.length; i++) {
        for (let j = 0; j < chaveDecripto.length; j++) {
            if(chaveDecripto[j] == i + 1){
                for (let k = 0; k < lines; k++) {
                    CchaveContain[j].push(nfrase[0])
                    nfrase = nfrase.replace(nfrase[0],'')
                }
                if(i+1 <= sobra && sobra != 0){
                    CchaveContain[i].push(nfrase[0])
                    nfrase = nfrase.replace(nfrase[0],'')
                }
            }
        }   
    }
    
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < chaveDecripto.length; j++) {
            claro += CchaveContain[j][i]
        }
    }
    if(sobra){
        for (let i = 0; i < sobra; i++) {
            claro += CchaveContain[i][lines];
        }
    }
/*
    for (let i = 0; i < chaveDecripto.length; i++) {
        for (let j = 0; j < CchaveContain[i].length; j++) {
            claro += CchaveContain[i][j]
        }
        
    }*/
/*
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j < chaveDecripto.length; j++) {
            CmsgContain.push(CchaveContain[j])
        }
    }

    if(nfrase){
        for (let i = 0; i < nfrase.length; i++) {
            /*CchaveContain[i].push(nfrase[0])
            nfrase = nfrase.replace(nfrase[0],'')      
        }
    }


    for (let i = 0; i < chaveDecripto.length; i++) {
        for (let j = 0; j < CmsgContain[i].length; j++) {
            claro += CmsgContain[i][j]
        }
    }*/
}

decripta()


console.log(CchaveContain)
console.log(claro)
