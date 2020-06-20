import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../../Components/Card';
import Product from '../../Components/Product';
import Api from '../../server/index'


export default function HomeScreen(props) {
  
    const [data, setData] = useState([])

    const api = new Api('https://back-ppe.herokuapp.com/')


    async function showRoutes(){
        const res  = await api.getProduct('/produtos')
        setData(res.data.data)
        }
   showRoutes()

    useEffect(()=>{
    showRoutes()
   console.log(data)         

  
    },[])

    const list = [
        {
            id: 1,
            name: 'Alface'
        },
        {
            id: 2,
            name: 'Cebola'
        },
        {
            id: 3,
            name: 'cenoura'
        }
    ]


    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.content}>
                <View style={styles.searchContainer}>
                <TextInput style={styles.search} placeholder="Pesquisar" />
                </View>
               

                <View style={styles.scrollProducts}>
                    <ScrollView horizontal={false}>
                        <View style={styles.scrollArea}>
                            <Text style={styles.sugestionText}>Sugestão para você</Text>
                            <ScrollView
                                style={styles.scroll}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                decelerationRate="fast">
                                {  
                                   data.map((e) => <Card key={e._id} img={e.img} name={e.name} />) 
                                }
                            </ScrollView>
                        </View>
                        
                       <View style={{
                           width:'100%',
                           alignItems:'center'
                       }}>
                        <Text style={styles.productInitialText}>Produtos</Text>
                       <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                       </View>
                    </ScrollView>
                    
                    
                                
                </View>
            </View>

        </SafeAreaView>
    )


}