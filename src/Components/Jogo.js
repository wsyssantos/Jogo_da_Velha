import{ React, useState, useEffect } from 'react';
import './Jogo.css';


function verificaGanhador(itemMatriz) {

}

export default function Jogar() {
    const matriz = [ /* Linhas e Colunas do Jogo */
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    
    const [valor, setValor] = useState('X'); /* Valor inicial atribuído*/
    const [itemMatriz, setItemMatriz] = useState (matriz); /* Valor inicial do Jogo */
    /* const vencedorX = ["X", "X", "X"]
    const vencedorO = ["O", "O", "O"]
    const [vencedor, setVencedor] = useState(false)
    const [contadorX, setContadorX] = useState(0)
    const [contadorO, setContadorO] = useState(0)    */ 
    const elementos = (indexAlterar, itemIndexAlterar) => {/* Posição linha clicada e coluna clicada */
        var podeJogar = false 
        var vencedor = false
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
       
           /*  
        if(!vencedor){
            if(setItemMatriz.toString() === vencedorX.toString()){
                alert('Vencedor é o player "X"')
                setVencedor(true)
                setContadorX(contadorX + 1)
            } else if (setItemMatriz.toString() === vencedorO.toString()){
                alert('Vencedor é o player "O"')
                setVencedor(true)
                setContadorO(contadorO + 1)
            } */
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
                <button className='jogar-novamente'>Jogar Novamente</button>        
            </div>
        </div>
        
        ) 
    }