import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'Vai',
      lastTime: null
    };

    //Variavel do timer do relógio
    this.timer = null;

    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)

  }

  vai(){
    if(this.timer != null){
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      //Tempo parado o botão vai mudar para 'Vai'
      this.setState({ botao: 'Vai' })
    } else{
        //Começa a girar o timer
        this.timer = setInterval( () => {
          this.setState({numero: this.state.numero + 0.1})
        }, 100);
        //Tempo contando o botão vai mudar para 'Parar'
        this.setState({ botao: 'Parar'})
    }
  }

  limpar(){
    //Reseta o timer
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    //Timer resetado o botão também reseta para 'Vai'
    this.setState({
      lastTime: this.state.numero.toFixed(1) + 's',
      numero: 0, 
      botao: 'Vai',
    });
  }

  render(){
    return(
      <View style={ styles.container }>

          <Image
            source={require('./src/cronometro.png')}
            style={styles.cronometro}
          />

          <Text style={styles.timer}>{ this.state.numero.toFixed(1) }</Text>

          <View style={styles.btnArea}>

            <TouchableOpacity style={styles.btn} onPress={ this.vai }>
              <Text style={styles.btnTexto}>{ this.state.botao }</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={ this.limpar }>
              <Text style={styles.btnTexto}>LIMPAR</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.areaLast}>
            <Text style={styles.areaTexto}>Último tempo: { this.state.lastTime }</Text>
          </View>  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn:{
    flex: 1,
    justifyContente: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    padding: 7,
    borderRadius: 10, 
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaLast:{
    marginTop: 40,
  },
  areaTexto:{
    color: '#FFF',
    fontSize: 25,
    fontStyle: 'italic'
  }
});

export default App;