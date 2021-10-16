import React, {Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      dados:[
        {nome:'Feijoada', preco: 29.99, img:'https://bit.ly/2lOKT0Q'},
        {nome:'Batata Frita', preco: 14.99, img:'https://bit.ly/2kGYc3c'},
        {nome:'Strogonoff de frango', preco: 16.99, img:'https://bit.ly/2md8j0j' },
        {nome:'Macarrão na chapa', preco: 9.99, img:'https://bit.ly/2kFaj0Q'},
        {nome:'Feijoada', preco: 29.99, img:'https://bit.ly/2lOKT0Q'},
        {nome:'Batata Frita', preco: 14.99, img:'https://bit.ly/2kGYc3c'},
        {nome:'Strogonoff de frango', preco: 16.99, img:'https://bit.ly/2md8j0j' },
        {nome:'Macarrão na chapa', preco: 9.99, img:'https://bit.ly/2kFaj0Q'},
        {nome:'Feijoada', preco: 29.99, img:'https://bit.ly/2lOKT0Q'},
        {nome:'Batata Frita', preco: 14.99, img:'https://bit.ly/2kGYc3c'},
        {nome:'Strogonoff de frango', preco: 16.99, img:'https://bit.ly/2md8j0j' },
      ]
    };
  }
  
  render(){
    return(
      <View>
        <Text style={{fontSize:20, textAlign:'center', marginVertical:10 }}>Restaurante ABC - Cardápio</Text>
        <FlatList data={this.state.dados} renderItem={({item})=>
          <View style={styles.container}>
            <Image style={{width:60, height:60}} source={{uri:item.img}}/>
            <View style={styles.containerText}>
              <Text style={styles.titulo}>{item.nome}</Text>
              <Text style={styles.preco}>R${item.preco}</Text>
            </View>
          </View>

        }/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
    paddingVertical:5,
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#EEEEEE'
  },
  containerText:{
    marginLeft:5,
    flexDirection:'column'
  },
  titulo:{
    marginBottom:5,
    fontSize:16,
  },
  preco:{
    fontSize:12,
  }
})