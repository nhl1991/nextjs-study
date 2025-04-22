'use client'
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useRef, useState } from "react";

export default function Home() {
  const textRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [ mode, setMode ] = useState(true);
  const onCopy = () => {
    try {
      // if(textRef.current)
      //   console.log(textRef.current.innerText as string)
      //    navigator.clipboard.writeText("TEXT")
      //'never' 형식에 'innerText' 속성이 없습니다.ts(2339)

      if (textRef.current)
        navigator.clipboard.writeText(textRef.current.value)
      alert('Copied!')
    } catch (error) {
      console.error("Err");
    }
  }

  const onPaste = () => {
    try {
      navigator.clipboard.readText().then((res) => {
        if (inputRef.current)
          inputRef.current.value = res;
      })

    } catch (error) {
      console.error("Err");
    }
  }


  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-1/2">
        <><b>INPUT:</b> <button className={`px-2 border-2 rounded-xl ${mode ? 'border-lime-500' : 'border-red-500'}`} onClick={()=> setMode(!mode)}>{`${mode ? 'ON' : 'OFF'}`}</button></>
      </div>
      <div className="w-1/2 flex border-2 border-gray-400 rounded-2xl">
        {mode ? <input type="text" className="w-full py-2 px-4 outline-none" ref={textRef} placeholder="Type something here and copy it." /> : <p className="w-full p-2" ref={textRef}>Click the copy button and paste it below.</p>}
        <button className="active:scale-105" onClick={onCopy}>
          <FontAwesomeIcon className="p-2" icon={faCopy as IconProp} />
        </button>
      </div>
      <div className="w-1/2 flex border-2 border-gray-400 rounded-2xl">
        <input className="w-full py-2 px-4 outline-none" ref={inputRef} type="text" placeholder="You can paste the text here." />
        <button className="active:scale-105" onClick={onPaste}>
          <FontAwesomeIcon className="p-2" icon={faCopy as IconProp} />
        </button>
      </div>
    </div>
  );
}
