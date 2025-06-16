import React from 'react'
function Main() {

    const icons = [
        {
          iconname: "About me",
          src: './src/img/about.svg',
          default: "about me"
        },
        {
          iconname: "CV/Skills",
          src: './src/img/cv.svg',
          default: "about me"
        },
        {
          iconname: "Contacts",
          src: './src/img/contacts.svg',
          default: "contacts"
        },
        {
          iconname: "Email me!",
          src: './src/img/email.svg',
          default: "about me"
        },
       
    ]

    return (
          <div className="flex flex-col p-5 gap-3 w-screen h-screen">
            {icons.map((ico, key) =>(
                 <div className="flex flex-col gap-1 items-center w-25 h-25" key={key}>
                    <img src={ico.src} className="w-15 h-15 "/>
                    <p className="pixel text-center text-white text-lg">{ico.iconname}</p>
                 </div>
            ))}
          </div>
    )
}

export default Main;