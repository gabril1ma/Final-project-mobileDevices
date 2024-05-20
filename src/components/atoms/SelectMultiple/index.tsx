import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, SafeAreaView, TextInput, FlatListComponent } from "react-native";


const SelectMultiple = ({ options = [], onChange , initialSelect = [], title = '', max }) => {

    const [visible, setVisible] = useState(false);
    const [originalOptions, setOriginalOptions] = useState([...options]);
    const [data, setData] = useState([...options]);
    const [termo, setTermo] = useState('');
    const [selected, setSelected] = useState([...initialSelect]);

    useEffect(() => {
        setOriginalOptions(options)
        setData(options)
    }, [options])

    //useEffect(() => {
      // let arr = [...originalOptions];
      // setData(arr.filter(i=>
      //   i.title.toLoweCase().includes(termo.toLowerCase()) || 
      //   i.body.toLoweCase().includes(termo.toLowerCase())
      // )) 
    //}, [termo])

    function toglleSelection (item){
        let index = selected.findIndex(i => i?.id == item?.id)
        let arrSelected = [...selected];
        if (index !=  -1){
            arrSelected.splice(index, 1);
        }
        else{
            if(arrSelected.length < max){
                arrSelected.push(item)
            }else{
                alert('Número Máximo Selecionado')
            }
        }
        setSelected(arrSelected)
    }

    function renderItem(item) {
        return (
            <TouchableOpacity style={[styles.item,
                 {backgroundColor:selected.findIndex(i => i.id == item.id) != -1 ? '#cff' : '#fff'}]}
                 onPress={() => toglleSelection(item)}>
                <Text>{item?.title}</Text>
                <Text>{item?.body}</Text>
            </TouchableOpacity>
        )
    }

    return <TouchableOpacity style={styles.container} onPress={() => setVisible(true)}>
        <Text numberOfLines={1}>{selected.length > 0 ? selected.map(p =>`${p.title}`) : 'Selecione a Noticia'}</Text>
        <Text>+</Text>
        <Modal onRequestClose={() => setVisible(false)} visible={visible} animationType={'slide'} >
            <SafeAreaView style={{ flex: 1 }} >
                <View style={styles.header}>
                    <View style={styles.headerR1}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Text style={styles.actions}>Voltar</Text>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.subtitle}>{`Selecione até ${max} opções`}</Text>
                        </View>
                        <TouchableOpacity onPress = {() => {
                            onChange(selected);
                            setVisible(false);
                            setTermo('');

                        }}>
                            <Text style={styles.actions}>Concluir</Text>
                        </TouchableOpacity>
                    </View>
                    {originalOptions.length > 10 ?
                        <TextInput placeholder={'pesquisar'}
                            style={styles.input}
                            value={termo}
                            onChangeText={setTermo} /> : null}
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => renderItem(item)}
                />
            </SafeAreaView>
        </Modal>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 12,
    },
    header: {
        backgroundColor: '#eee',
        padding: 12,
    },
    headerR1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    actions: {
        fontSize: 14,
        color: 'blue',
        fontWeight: '500',
    },

    title: {
        fontSize: 16,
        fontWeight: '500',
        color: '#777',
    },
    subtitle: {
        fontSize: 13,
        fontWeight: '500',
        color: '#999',
        textAlign: 'center',
    },

    input: {
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingHorizontal: 10,
        height: 35,
        marginTop: 7,
    },

    item: {
        borderBottomColor:'#ccc',
        borderBottomWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
    }
})
export default SelectMultiple;