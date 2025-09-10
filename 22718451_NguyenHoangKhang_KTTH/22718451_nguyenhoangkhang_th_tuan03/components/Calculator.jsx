import {View, StyleSheet, Text, TouchableOpacity, TextInput, Image} from "react-native"
import {useState} from "react"
export default function Calculator() {

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handle = () => {
    alert(input)
    if(input.includes("+")) {
      let index = input.indexOf("+")
      const a = input.slice(0, index)
      const b = input.slice(index, 1000)
      setResult(parseInt(a) + parseInt(b));
    }
    if(input.includes("-")) {
      let index = input.indexOf("-")
      const a = input.slice(0, index)
      const b = input.slice(index, 1000)
      setResult(parseInt(a) - parseInt(b));
    }
    if(input.includes("*")) {
      let index = input.indexOf("*")
      const a = input.slice(0, index)
      const b = input.slice(index, 1000)
      setResult(parseInt(a) * parseInt(b));
    }
    if(input.includes("/")) {
      let index = input.indexOf("/")
      const a = input.slice(0, index)
      const b = input.slice(index, 1000)
      setResult(parseInt(a) / parseInt(b));
    }
  }

  return <View style={styles.container}>
  
  <View style={styles.screen}> 
    {input + " = " + result}
  </View>
  <View style={styles.buttonContainer}> 
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"1")}} ><Text style={styles.textButton}>1</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"2")}} ><Text style={styles.textButton}>2</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"3")}} ><Text style={styles.textButton}>3</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"4")}} ><Text style={styles.textButton}>4</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"5")}} ><Text style={styles.textButton}>5</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"6")}} ><Text style={styles.textButton}>6</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"7")}} ><Text style={styles.textButton}>7</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"8")}} ><Text style={styles.textButton}>8</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"9")}} ><Text style={styles.textButton}>9</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"0")}} ><Text style={styles.textButton}>0</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"+")}} ><Text style={styles.textButton}>+</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"-")}} ><Text style={styles.textButton}>-</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"*")}} ><Text style={styles.textButton}>*</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => {setInput(prev => prev+"/")}} ><Text style={styles.textButton}>/</Text></TouchableOpacity>
    <TouchableOpacity style={[styles.button, {backgroundColor: "tomato"}]}><Text style={styles.textButton}>Xóa</Text></TouchableOpacity>
    
    
    <TouchableOpacity onPress={() => {handle()}} style={[styles.button, {backgroundColor: "tomato"}]}><Text style={styles.textButton}>Tính toán</Text></TouchableOpacity>
  </View>
  
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  screen: {
    width: "100%",
    height: 200,
    backgroundColor: "gray"
  },
  buttonContainer: {flexDirection:"row", flexWrap: "wrap"},
  button: {
    padding: 24,
    margin: 8,
    // backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "gray"
  }, 
  textButton: {}
})