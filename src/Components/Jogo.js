import{ React, useState, useEffect } from 'react';
import './Jogo.css';


function verificaGanhador(itemMatriz) {
    if (itemMatriz[0][0] === itemMatriz[0][1] && itemMatriz[0][1] === itemMatriz[0][2]) {
        return itemMatriz[0][0]
    }
    else if (itemMatriz[1][0] === itemMatriz[1][1] && itemMatriz[1][1] === itemMatriz[1][2]) {
        return itemMatriz[1][0]
    }
    else if (itemMatriz[2][0] === itemMatriz[2][1] && itemMatriz[2][1] === itemMatriz[2][2]) {
        return itemMatriz[2][0]
    }
    else if (itemMatriz[0][0] === itemMatriz[1][0] && itemMatriz[1][0] === itemMatriz[2][0]) {
        return itemMatriz[0][0]
    }
    else if (itemMatriz[0][1] === itemMatriz[1][1] && itemMatriz[1][1] === itemMatriz[2][1]) {
        return itemMatriz[0][1]
    }
    else if (itemMatriz[0][2] === itemMatriz[1][2] && itemMatriz[1][2] === itemMatriz[2][2]) {
        return itemMatriz[0][2]
    }
    else if (itemMatriz[0][0] === itemMatriz[1][1] && itemMatriz[1][1] === itemMatriz[2][2]) {
        return itemMatriz[0][0]
    }
    else if (itemMatriz[0][2] === itemMatriz[1][1] && itemMatriz[1][1] === itemMatriz[2][0]) {
        return itemMatriz[0][2]
    }
    else {
        return null
    }
}

export default function Jogar() {
    const matriz = [ /* Linhas e Colunas do Jogo */
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    
    const [valor, setValor] = useState('X'); /* Valor inicial atribuído*/
    const [itemMatriz, setItemMatriz] = useState (matriz); /* Valor inicial do Jogo */

    const limpaJogo = () => {
        setItemMatriz(matriz);
        setValor('X');
    }

    const mostraVencedor = (vencedor) => {
        if(vencedor != null) {
            alert('Vencedor é o player "' + vencedor + '"')
            limpaJogo()
        }
    }

    useEffect(() => {
        document.title = `Vez do jogador ${valor}!`;
        let vencedor = verificaGanhador(itemMatriz);
        mostraVencedor(vencedor)
    });

    const elementos = (indexAlterar, itemIndexAlterar) => {/* Posição linha clicada e coluna clicada */
        var podeJogar = false 
        const Linha = itemMatriz.map((linha,index) => {
            return linha.map((coluna, itemIndex) => {
                if (indexAlterar === index && itemIndex === itemIndexAlterar && coluna == null) {
                    coluna = valor 
                    podeJogar = true
                } 
                return coluna           
                               
            })
        })     
        if(podeJogar) {   
            setItemMatriz(Linha)
            if (valor === 'X') {
                setValor('O')
            } else if (valor === 'O') {
                setValor('X')
            }
        }
        
    }       
    return (
        <div className='container'>
            <div className='layout'>
                <h1>Vez do jogador: <span className='valor'>{valor}</span></h1>
        
                {itemMatriz.map((linha, index) => 
                    <div className='layout__row'>
                        {linha.map((item, itemIndex) => 
                            <p onClick={() => elementos(index, itemIndex)}>{item}</p>
                        )}
                    </div>
                )}
                <button className='jogar-novamente' onClick={() => {
                    limpaJogo()
                }}>Recomeçar Jogo</button>        
            </div>
        </div>
        
        ) 
    }