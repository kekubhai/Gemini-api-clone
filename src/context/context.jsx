  /* import  { createContext ,useState} from "react";

import run from "../config/gemini";

 export const  Context =createContext();

 const ContextProvider=(props) => { 

const [input,setInput]=useState("");
const [recentPrompt,setRecentPrompt]=useState("");
const [prevPrompts,setPrevPrompts]=useState([]);
const [showResults,setShowResults]=useState(false);
const [loading,setLoading]=useState(false);
const[resultData,setResultData]=useState("");

   const delayPara=(index)=> {
      setTimeout(function(){ 
         setResultData(prev=>prev+nextWord);

      },75*index)


   }

   const onSent =async (prompt)=> {

      setResultData("")
      setLoading(true)
      setShowResults(true)
      setRecentPrompt(input)
    const response = await run(input)
    setPrevPrompts(prev=>[...prev,input])
    let responseArray=response.split("**");
    let newArray;
    for( let i=0;i<responseArray.length;i++)
    {
      if(i===0 || i%2==1){
         newArray +=responseArray[i]; 

      }    
   else{ 
      newArray += "<b>" +ResponseArray[i]+ "</b>"
    }}
    let newResponse2=newResponse.split("*").join("</br>")
   let newResponseArray =newResponse2.split(" ");
   for (let i = 0; i < newResponseArray.length; i++){
    const nextWord =newResponseArray[i];
    delayPara(i,nextWord+ " ")
   }
    setLoading(false)
    setInput("")
   }


    const contextValue ={
      prevPrompts,setPrevPrompts,
      onSent,
      setRecentPrompt,
      setResultData,
      setShowResults,
      setLoading,
      recentPrompt,
      showResults,
      loading,
      resultData,
      input,
      setInput,


    }
    return (
        <Context.Provider value={contextValue}>
           {props.children}
        </Context.Provider>
    )
 }


 export default ContextProvider
 */

 import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
	const [input, setInput] = useState("");
	const [recentPrompt, setRecentPrompt] = useState("");
	const [prevPrompts, setPrevPrompts] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [loading, setLoading] = useState(false);
	const [resultData, setResultData] = useState("");

	const delayPara = (index, nextWord) => {
		setTimeout(function () {
			setResultData((prev) => prev + nextWord);
		}, 10 * index);
	};
    const newChat = () =>{
        setLoading(false);
        setShowResults(false)
    }

	const onSent = async (prompt) => {
		setResultData("");
		setLoading(true);
		setShowResults(true);
        let response;
        if(prompt !== undefined){
            response = await runChat(prompt);
            setRecentPrompt(prompt)
        }else{
            setPrevPrompts(prev=>[...prev,input]);
            setRecentPrompt(input);
            response=await runChat(input);
        }
		
		try {
			
			
			let responseArray = response.split("**");
            let newResponse = "";
			for (let i = 0; i < responseArray.length; i++) {
				if (i === 0 || i % 2 !== 1) {
					newResponse += responseArray[i];
				} else {
					newResponse += "<b>" + responseArray[i] + "</b>";
				}
			}
			let newResponse2 = newResponse.split("*").join("<br/>");
			let newResponseArray = newResponse2.split("");
			for (let i = 0; i < newResponseArray.length; i++) {
				const nextWord = newResponseArray[i];
				delayPara(i, nextWord + "");
			}
		} catch (error) {
			console.error("Error while running chat:", error);
			// Handle error appropriately
		} finally {
			setLoading(false);
			setInput("");
		}
	};

	const contextValue = {
		prevPrompts,
		setPrevPrompts,
		onSent,
		setRecentPrompt,
		recentPrompt,
		input,
		setInput,
		showResults,
		loading,
		resultData,
		newChat,
	};

	return (
		<Context.Provider value={contextValue}>{props.children}</Context.Provider>
	);
};

export default ContextProvider;